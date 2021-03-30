import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getTransactions():Observable<any[]>{
      return this.http.get<any>(this.APIurl + '/transaction');
  }
}

// }

// export class SharedService {

//   private serviceUrl = "http://localhost:5000/api/transaction";
//   constructor(private http:HttpClient) { }

//   getTransactions(): Observable<User[]>{
//     return this.http.get<User[]>(this.serviceUrl);
//   }


// }
