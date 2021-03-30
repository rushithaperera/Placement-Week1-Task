import { Component, OnInit } from '@angular/core';

export interface Transaction {
  Account: string;
  Balance: number;
}

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {Account: '#32456', Balance: 40203},
    {Account: '#14134', Balance: 5343},
  ];

  getTotalCost() {
    return this.transactions.map(t => t.Balance).reduce((acc, value) => acc + value, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
