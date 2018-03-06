import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', by attr
  selector: 'app-servers',
  /*template: `<app-server></app-server>
  <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serverCretionStatus = "No server was created";

  serverName = "";

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    },2000)

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCretionStatus = "server was created"
  }

  onUpdateServerName(event: any){
    console.log(event)

    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
