import { TasksComponent } from './tasks.component';
import { TasksService } from './tasks.service';
import { Component } from '@angular/core';
import { Task } from './task';
import { Button } from 'protractor';

@Component({
  selector: 'tasks-form',
  templateUrl: './tasks-form.component.html',
  styles: [`
          button:hover {
            background: lightgreen;
          } 
          `]

})
export class TasksFormComponent {

  constructor(private service: TasksService) { }

  addTask(inputValue: string) {
    if (inputValue.trim() !=='') {
      this.service.addTask({title: inputValue});
    }
  }
    
 }
