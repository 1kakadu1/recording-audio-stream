import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RecorderService } from './recorder/recorder.service';
import { RecorderController } from './recorder/recorder.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'frontend', 'build'),
    }),
  ],
  controllers: [AppController, ApiController, RecorderController],
  providers: [AppService, RecorderService],
})
export class AppModule {}
