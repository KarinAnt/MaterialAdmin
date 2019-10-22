import { Component, OnInit } from '@angular/core';
import { Body } from '../body.interface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  bodyArray: Body[] =[{
    image:"person",
    color:"#e53a36",
    point:7459,
    description:"New projects"
  },
  {
    image:"confirmation_number",
    color:"#4ca74f",
    point:7783,
    description:"Total Sales"
  },
  {
    image:"pages",
    color:"#fea11d",
    point:569,
    description:"Open Tickets"
  },
  {
    image:"person_add",
    color:"#11b2c6",
    point:5785,
    description:"New Visitors"
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
