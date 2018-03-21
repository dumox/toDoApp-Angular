import { TasksFormComponent } from './tasks-form.component';
import { TasksService } from './tasks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks.component';
import { LogService } from './log.service';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TasksService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
