import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string) {
    this.socket.emit('signal', msg);
  }

  getMessage() {
    return this.socket.fromEvent('signal').pipe(map((data:any) => data.msg));
  }

  listen(eventName: string){
    return new Observable((subscriber)=>{
      this.socket.on(eventName,(data: any)=>{
        subscriber.next(data);
      })
    })
  }
}
