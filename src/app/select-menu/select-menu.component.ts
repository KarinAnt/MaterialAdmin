import { Component, OnInit } from '@angular/core';
import { selectMenu } from '../select.menu.interface';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.css']
})
export class SelectMenuComponent implements OnInit {
  foods: selectMenu[] = [
    {value: 'steak-0', viewValue: 'Bread, Cereal, Rice, and Pasta'},
    {value: 'pizza-1', viewValue: 'Vegetables'},
    {value: 'tacos-2', viewValue: 'Fruit'},
    {value: 'tacos-2', viewValue: 'Milk, Yogurt, and Cheese'},                     
    {value: 'tacos-2', viewValue: 'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts'},
    {value: 'tacos-2', viewValue: 'Fats, Oils, and Sweets'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

