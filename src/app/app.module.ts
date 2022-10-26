import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './core/components/table/table.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './core/components/modal/modal.component';
import { ConfirmComponent } from './core/components/confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDirective } from './core/directives/modal.directive';
import { HomeComponent } from './page/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    ModalComponent,
    HomeComponent,
    ConfirmComponent,
    ModalDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
