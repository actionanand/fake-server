import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unkown' = 'online';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unkown';
      }
    }, 5000);
  }
}
