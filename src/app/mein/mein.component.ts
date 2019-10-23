import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mein',
  templateUrl: './mein.component.html',
  styleUrls: ['./mein.component.css']
})
export class MeinComponent implements OnInit {
  @Input() menuPage :{name:string, iconName:string};
  @Input() dasForm;
  public form=false;
  public das=false;
  constructor() { }

  ngOnInit() {
  }
  addClass(elem){
    if(elem === 'Forms'){
      this.form = true;
      this.das = false;
    }else if(elem === "Dashboard"){
      this.form = false;
      this.das = true;
    }
  }
}
