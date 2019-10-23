import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  color = 'red';
  mode = 'determinate';
  value = 0;
  
  constructor() {
    var val = setInterval(() => {
      this.value++;
      if(this.value > 40){
        clearInterval(val)
      }
    },30)
  }
  ngOnInit() {
  }

}
