import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { MsgsService } from './msgs.service';
import { Server, Socket } from 'socket.io';
import { from, map, Observable } from 'rxjs';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MsgsGateway {
  @WebSocketServer()
  server: Server;



  @SubscribeMessage('signal')
  async signal(@MessageBody() data: string): Promise<string> {
    console.log("Recibiendo dato.. ",data);
    this.server.emit('signal',data);
    return data;
  }
}
