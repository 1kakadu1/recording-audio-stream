import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import fetch from 'node-fetch';
import { IRecorderStatus } from './recorder.interface';
import * as path from 'path';

@Injectable()
export class RecorderService {
  private isRecording = false;
  private writeStream: fs.WriteStream | null = null;
  private controller: AbortController | null = null;
  private startTime: number | null = null;
  private elapsed = 0; // прошедшее время в секундах

  async startRecording(
    streamUrl: string,
    outputFile: string,
  ): Promise<IRecorderStatus> {
    if (this.isRecording) {
      return { status: 'record', status_info: 'Already recording' };
    }

    this.isRecording = true;
    this.elapsed = 0;
    this.startTime = Date.now();
    this.controller = new AbortController();

    this.writeStream = fs.createWriteStream('public/audio/' + outputFile);

    try {
      const response = await fetch(streamUrl, {
        signal: this.controller.signal,
      });

      if (!response.ok || !response.body) {
        throw new Error(
          JSON.stringify({
            status: 'error',
            status_info: 'Error recording',
            status_detail: `Stream error: ${response.statusText}`,
          } as IRecorderStatus),
        );
      }

      Logger.log('Recording started...');
      response.body.pipe(this.writeStream);

      // response.body.on('data', (data) => {
      //   const line = data.toString();
      //   const match = line.match(/time=(\d+:\d+:\d+\.\d+)/);
      //   Logger.log(`Progress audio ${outputFile}:${line}`);
      // });

      // Закрываем поток при завершении
      response.body.on('end', () => {
        this.stopRecording();
      });

      return {
        status: 'start',
        status_info: 'Recording started',
      };
    } catch (e) {
      Logger.error(e);
      this.stopRecording();
      let status_detail = '';

      if (typeof e === 'object') {
        status_detail = JSON.stringify(e);
      } else if (typeof e === 'string') {
        const value: object | string | IRecorderStatus = JSON.parse(e);
        if (typeof value === 'object' && 'status_detail' in value) {
          status_detail = value.status_detail;
        } else {
          status_detail = e;
        }
      } else {
        status_detail = 'Error unknown: ' + JSON.stringify(e);
      }

      return { status: 'error', status_info: 'Error recording', status_detail };
    }
  }

  stopRecording(): IRecorderStatus {
    if (!this.isRecording)
      return {
        status: 'no_running',
        status_info: 'There is no running record',
      };

    Logger.log('Stopping recording...');

    this.isRecording = false;

    if (this.controller) {
      this.controller.abort();
      this.controller = null;
    }

    if (this.writeStream) {
      this.writeStream.end();
      this.writeStream = null;
    }

    return {
      status: 'stop',
      status_info: 'Recording stop',
    };
  }

  getStatus() {
    if (this.isRecording && this.startTime) {
      this.elapsed = Math.floor((Date.now() - this.startTime) / 1000);
    }

    return {
      recording: this.isRecording,
      elapsed: this.elapsed,
    };
  }

  getFileInfo(file: string) {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) return { exists: false };

    const stats = fs.statSync(filePath);
    return {
      exists: true,
      size: stats.size,
    };
  }

  listFiles(folder_path: string) {
    //const dir = process.cwd();
    const files = fs.readdirSync(folder_path).filter((f) => f.endsWith('.mp3'));

    return files.map((f) => ({
      name: f,
      size: fs.statSync(path.join(folder_path, f)).size,
    }));
  }
}
