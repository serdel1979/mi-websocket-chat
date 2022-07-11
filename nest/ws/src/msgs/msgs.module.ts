import { Module } from '@nestjs/common';
import { MsgsService } from './msgs.service';
import { MsgsGateway } from './msgs.gateway';

@Module({
  providers: [MsgsGateway, MsgsService]
})
export class MsgsModule {}
