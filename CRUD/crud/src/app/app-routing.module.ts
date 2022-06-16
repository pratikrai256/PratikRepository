import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';

const routes: Routes = [
  {path:'products',component: ProdDetailsComponent},
  {path:'add-prod',component: AddProdComponent},
  {path:'edit-prod/:id',component: EditProdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
