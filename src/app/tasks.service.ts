import { Injectable } from '@angular/core';
import { Task } from './task';
import { LogService } from './log.service';

@Injectable()
export class TasksService {

  private lastId: number = 0;
  private tasksList: Task[] = [];

  constructor(private logService: LogService) { }

  // Tasks CRUD functions
  getTasks(): Task[] {
    this.logService.log('tasks initialised', this.tasksList);
    return this.tasksList;
  }

  addTask(task) {
    // if (this.tasksList.length) {
    //   this.lastId = this.tasksList[this.tasksList.length-1].id;
    // } else {
    //   this.lastId = 0;
    // }

    task.id = ++this.lastId;
    let newTask: Task = new Task({
      id: task.id,
      title: task.title
    });
    this.tasksList.push(newTask);
    this.logService.log('task added', this.tasksList);
    return this;
  }

  deleteTask(id: number) {
    this.tasksList.splice(id, 1);
    this.logService.log('task removed', this.tasksList);
    return this;
  }

  updateTask(id: number, newTaskTitle:string) {
    let taskToEdit = this.tasksList.find(task => task.id === id);
    taskToEdit.title = newTaskTitle;
    this.logService.log('task updated', this.tasksList);
    return this;
  }
}
