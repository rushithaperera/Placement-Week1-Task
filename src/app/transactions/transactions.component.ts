import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SharedService} from 'src/app/shared.service';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {User} from '../user.model';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})


export class TransactionsComponent implements OnInit  {
  
  // constructor(private service:SharedService){}

  // dataSource = new UserDataSource(this.service);
   displayedColumns = ["TransactionId", "AccountName", "Amount", "card"];

  // ngOnInit(){
    
  // }
  
  
 constructor(private service:SharedService){}

  dataSource: any = []; 
  
  ngOnInit(): void {
    this.refreshTransactionList();
  }

  refreshTransactionList(){
    this.service.getTransactions().subscribe(data=>{
      this.dataSource=data;
    })
  }
 }



  // export class UserDataSource extends DataSource<any>{
  //   constructor(private sharedService: SharedService){
  //     super();
  //   }

  //   connect(): Observable<User[]>{
  //     return this.sharedService.getTransactions();
  //   }

  //   disconnect(){}
  // }