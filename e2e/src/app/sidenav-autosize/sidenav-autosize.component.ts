import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-autosize',
  templateUrl: './sidenav-autosize.component.html',
  styleUrls: ['./sidenav-autosize.component.css']
})
export class SidenavAutosizeComponent implements OnInit {
  showFiller = true;
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

}


