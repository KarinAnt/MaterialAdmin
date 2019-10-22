import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mein',
  templateUrl: './mein.component.html',
  styleUrls: ['./mein.component.css']
})
export class MeinComponent implements OnInit {
  @Input() menuPage :{name:string, iconName:string};
  constructor() { }

  ngOnInit() {
  }

}
