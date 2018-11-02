import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoReducer } from './to-do/store/to-do.reducers';
import { ToDoComponent } from './to-do/components/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos: ToDoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
