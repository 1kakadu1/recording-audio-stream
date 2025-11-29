import {
  Controller,
  Get,
  NotFoundException,
  Query,
  StreamableFile,
} from '@nestjs/common';
import { RecorderService } from './recorder.service';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Controller('recorder')
export class RecorderController {
  private readonly AUDIO_PATH = 'public/audio/';
  constructor(private readonly recorderService: RecorderService) {}

  @Get('start')
  start(
    @Query('url')
    url: string,
    @Query('file_name') file_name: string,
  ) {
    return this.recorderService.startRecording(
      url,
      `${file_name ? file_name + '-' : ''}${uuidv4() + '.mp3'}`,
    );
  }

  @Get('stop')
  stop() {
    return this.recorderService.stopRecording();
  }

  @Get('status')
  status() {
    return this.recorderService.getStatus();
  }

  @Get('file-info')
  fileInfo(@Query('file_name') file_name: string) {
    return this.recorderService.getFileInfo(this.AUDIO_PATH + file_name);
  }

  @Get('files')
  listFiles() {
    return this.recorderService.listFiles(this.AUDIO_PATH);
  }

  @Get('download')
  download(@Query('file') file: string, @Query('name') name?: string) {
    const filePath = path.join(this.AUDIO_PATH, file);

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('File not found');
    }

    const stream = fs.createReadStream(filePath);

    return new StreamableFile(stream, {
      type: 'audio/mpeg',
      disposition: `attachment; filename="${name ? name + '.mp3' : file}"`,
    });
  }
}
