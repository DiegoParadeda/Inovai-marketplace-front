import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }
  showNotification(from, align){


      const color = Math.floor((Math.random() * 4) + 1);
  }
  ngOnInit() {
  }

}
