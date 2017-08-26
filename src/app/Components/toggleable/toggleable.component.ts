import { Component, OnInit } from '@angular/core';
import {timestamp} from 'rxjs/operator/timestamp';

@Component({
  selector: 'app-toggleable',
  templateUrl: './toggleable.component.html',
  styleUrls: ['./toggleable.component.css']
})
export class ToggleableComponent implements OnInit {

  active: boolean;
  timestamps: number[];

  constructor() {
    this.active = false;
    this.timestamps = [];
  }

  ngOnInit() {
  }

  toggleParagraph() {
    this.active = !this.active;
    this.timestamps.push(Date.now());
  }

  overFive() {
    return this.timestamps.length > 5;
  }
}
