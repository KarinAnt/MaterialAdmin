import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-autosize',
  templateUrl: './sidenav-autosize.component.html',
  styleUrls: ['./sidenav-autosize.component.css']
})
export class SidenavAutosizeComponent implements OnInit {
  showFiller = true;
<<<<<<< HEAD
  public dasAndForm=true;
=======
>>>>>>> 67047d47cb4ee2499731344f1de13167f8fb01b8
  menuArray:{name:string, iconName:string}[]=[{
    name: 'Dashboard',
    iconName:'desktop_mac'
  },
  {
    name: 'Forms',
    iconName:'filter_tilt_shift'
  },
  {
    name: 'UI Features',
    iconName:'dashboard'
  },
  {
    name: 'Tables',
    iconName:'grid_on'
  },
  {
    name: 'Charts',
    iconName:'pie_chart'
  },
  {
    name: 'Sample Pages',
    iconName:'pages'
  }];
  constructor() { }

  ngOnInit() {
  }
  dashboardAndForms(elem){
    if(elem === 'Dashboard'){
      this.dasAndForm = true;
    }else if(elem === 'Forms'){
      this.dasAndForm = false;
    }
  }
}


