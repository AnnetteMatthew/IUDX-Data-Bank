import { Routes } from '@angular/router';
import { DataBankComponent } from './pages/data-bank/data-bank.component';

export const routes: Routes = [
  { path: '', component: DataBankComponent },
  { path: '**', redirectTo: '' },
];
