import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  task = new FormControl('');
  theseTasks: string[] =[

  ]

onSubmit(){

  if(String(this.task.value)==''){
    
  }else{
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.name = "first"
    var label = document.createElement("label")
    label.htmlFor = "first"
    label.innerText = String(this.task.value + '\n')
    document.getElementById("1")?.appendChild(checkbox)
    document.getElementById("1")?.appendChild(label)
    this.task.reset()
  }
}

}
