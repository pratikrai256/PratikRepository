import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"user-detail",component:UserDetailComponent},
  {path:"contact",component:ContactComponent},
  {path:"users",component:UsersComponent},
  {path:"products",loadChildren:()=>import("./products/products.module").then((x)=>x.ProductsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
