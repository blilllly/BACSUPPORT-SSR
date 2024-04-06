import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PrintersComponent } from './pages/printers/printers.component';
import { RentComponent } from './pages/rent/rent.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { TechnicalServiceComponent } from './pages/technical-service/technical-service.component';
import { PrinterDetailsComponent } from './pages/printer-details/printer-details.component';

export const routes: Routes = [
  { path: '' , redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'printers', component: PrintersComponent },
  { path: 'rent', component: RentComponent },
  { path: 'supplies', component: SuppliesComponent },
  { path: 'technical-service', component: TechnicalServiceComponent },
  { path: 'printer-details/:id', component: PrinterDetailsComponent },
  { path: '**', component: HomeComponent }
];
