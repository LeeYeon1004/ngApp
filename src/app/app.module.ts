import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './core/components/table/table.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './core/components/modal/modal.component';
import { ConfirmComponent } from './core/components/confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { FocusInputDirective } from './core/directives/focus-input.directive';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    ModalComponent,
    HomeComponent,
    ConfirmComponent,
    FocusInputDirective,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
