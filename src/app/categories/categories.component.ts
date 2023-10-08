import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {

  public shows: boolean[] =[false, false, false, false, false, false, false, false];


 selected(){
  this.shows.fill(false);
  this.shows[0] = true;
 }
 schoolSelected(){
  this.shows.fill(false);
  this.shows[1] =true;
 }
 workSelected(){
  this.shows.fill(false);
  this.shows[2] =true;
 }
 healthSelected(){
  this.shows.fill(false);
  this.shows[3] =true;
 }
 clubsSelected(){
  this.shows.fill(false);
  this.shows[4] =true;
 }
 sportsSelected(){
  this.shows.fill(false);
  this.shows[5] =true;
 }
 extracSelected(){
  this.shows.fill(false);
  this.shows[6] =true;
 }
 careerSelected(){
  this.shows.fill(false);
  this.shows[7] =true;
 }
  
}
