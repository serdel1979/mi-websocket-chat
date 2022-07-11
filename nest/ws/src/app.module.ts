import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MsgsModule } from './msgs/msgs.module';

@Module({
  imports: [MsgsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
