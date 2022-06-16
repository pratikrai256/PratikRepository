import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AgePipe } from './Pipes/age.pipe';
import { FormsModule } from '@angular/forms';
// import { City } from './city';
import { ProductComponent } from './product/product.component';
import { pipe } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    AgePipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
