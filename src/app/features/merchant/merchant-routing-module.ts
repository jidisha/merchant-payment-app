import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantFormComponent } from '../../merchant-form/merchant-form.component/merchant-form.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ViewMerchant } from '../../view-merchant/view-merchant';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'merchant-form', component: MerchantFormComponent },
  { path: 'merchant-form/:id', component: MerchantFormComponent },
  { path: 'view-merchant/:id', component: ViewMerchant },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
