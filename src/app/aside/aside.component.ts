import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  ShowLoader = true;
  color = 'red';
  mode = 'determinate';
  value = 50;
  constructor() { 
    // this.ShowLoader = true;
    // var val = setInterval(function(){
    //   this.ShowLoader = true;

    //   this.value = 43 ;
    //   console.log(this.value);
    //   if(this.value > 40){
    //     clearInterval(val)
    //   }
    // },1000)
  }

  ngOnInit() {
  }

}
