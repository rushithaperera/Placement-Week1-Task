import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';
import { CustomPreloadingService } from './custom-preloading.service';
import { DashComponent } from './dash/dash.component';
import { DetailsComponent } from './details/details.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: '', component: DashComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'cards', data: {preload: true},  component: CardsComponent},
  {path: 'transaction', component: TransactionsComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'myAccount', component: DetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
