import { Component, OnInit, Input } from '@angular/core';
import { Body } from '../body.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() bodyPage: Body;
  constructor() { }

  ngOnInit() {
  }

}
