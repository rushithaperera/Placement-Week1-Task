import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Savings',  symbol: '1346 $'},
  {name: 'Fixed Deposit', symbol: '5450 $'},
  {name: 'TOTAL', symbol: '7450 $'},
];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}
