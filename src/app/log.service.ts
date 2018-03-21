import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class LogService {

  constructor() { }

  log(logMessage: string, tasksList: Task[]) {
    console.log(logMessage);
    console.table(tasksList);
  }
}