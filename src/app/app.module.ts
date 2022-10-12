import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './core/components/table/table.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './core/components/modal/modal.component';
import { HomeComponent } from './core/page/home/home.component';

@NgModule({
  declarations: [AppComponent, TableComponent, HeaderComponent, ModalComponent, HomeComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
