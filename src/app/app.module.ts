import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoTrackerComponent } from './to-do-tracker/to-do-tracker.component';
import {MatChipsModule} from '@angular/material/chips';
import { CategoriesComponent } from './categories/categories.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ListComponent } from './list/list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoTrackerComponent,
    ListComponent,
    GeneratorComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule, 
    BrowserAnimationsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
