import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ws';
  private data: number = 1;

  constructor(private websockService: WebsocketService){}

  public list: string[] = [];
  public texto: string = "";

  ngOnInit(): void {
    //escucha en el socket
    this.websockService.listen('signal').subscribe((data:any)=>{
      this.list.push(data);
      console.log(data);
    })
  }

  enviar(text:string){
    this.texto = "";
    this.websockService.sendMessage(text);
  }
}
