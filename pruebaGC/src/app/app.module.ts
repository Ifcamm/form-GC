import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputersComponent } from './components/computers/computers.component';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component';
import { HttpClientModule } from '@angular/common/http';
import { RowStyleDirective } from './directives/row-style.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [AppComponent, ComputersComponent, EditComputerComponent, RowStyleDirective, CapitalizePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
