import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdDetailsComponent,
    AddProdComponent,
    EditProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
