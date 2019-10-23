import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-autosize',
  templateUrl: './sidenav-autosize.component.html',
  styleUrls: ['./sidenav-autosize.component.css']
})
export class SidenavAutosizeComponent implements OnInit {
  showFiller = true;
  public dasAndForm=true;
  menuArray:{name:string, iconName:string, classSilver:string}[]=[{
    name: 'Dashboard',
    iconName:'desktop_mac',
    classSilver:'silver'
  },
  {
    name: 'Forms',
    iconName:'filter_tilt_shift',
    classSilver:'silver'
  },
  {
    name: 'UI Features',
    iconName:'dashboard',
    classSilver:''
  },
  {
    name: 'Tables',
    iconName:'grid_on',
    classSilver:''
  },
  {
    name: 'Charts',
    iconName:'pie_chart',
    classSilver:''
  },
  {
    name: 'Sample Pages',
    iconName:'pages',
    classSilver:''
  }];
  constructor() { }

  ngOnInit() {
  }

  dashboardAndForms(elem){
    if (elem === 'Dashboard') {
      this.dasAndForm = true;
    } else if(elem === 'Forms') {
      this.dasAndForm = false;
    }
  }
}


