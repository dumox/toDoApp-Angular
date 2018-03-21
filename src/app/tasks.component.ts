import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  editingTask = '';
  sortByNumberToZero: boolean = false;
  sortByNameToEnd: boolean = false;

  constructor(private service: TasksService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.tasks = this.service.getTasks();
  }

  // Sorting functions
  sortTasksByNumber() {
    this.sortByNumberToZero = !this.sortByNumberToZero;
    
    if (this.sortByNumberToZero) {
      this.tasks.sort((a, b) =>  b.id - a.id);
      return 0;
    } else {
      this.tasks.sort((a, b) =>  a.id - b.id);
      return 0;
    }
  }

  sortTasksByName() {
    this.sortByNameToEnd = !this.sortByNameToEnd;

    if (this.sortByNameToEnd) {
      this.tasks.sort((a, b) => {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x > y) {return -1;}
        if (x < y) {return 1;}
        return 0;
      });
    } else {
      this.tasks.sort((a, b) => {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x > y) {return 1;}
        if (x < y) {return -1;}
        return 0;
       });
    }
  }

  // Tasks CRUD
  deleteTask(id: number) {
    this.service.deleteTask(id);
  }

  editTask(task, el) {
    this.editingTask = task;
    el.classList.toggle('isEditing');
  }

  stopEditingTask(el) {
    el.classList.remove('isEditing');
    this.editingTask = '';
  }

  updateEditedTask(task, editedTitle: string) {
		editedTitle = editedTitle.trim();

		if (editedTitle.length === 0) {
       this.service.deleteTask(task);
       return;
		}

    this.service.updateTask(task.id, editedTitle);
	}

 }