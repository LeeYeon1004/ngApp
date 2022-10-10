import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './core/table/table.component';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [AppComponent, TableComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
