import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoDetailComponent } from './to-do/to-do-detail/to-do-detail.component';
import { ToDoAddComponent } from './to-do/to-do-add/to-do-add.component';
import { ToDoEditComponent } from './to-do/to-do-edit/to-do-edit.component';
import { TodoService } from './services/todo.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { LocalStorageModule } from 'angular-2-local-storage';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'todo/todo-add', component: ToDoAddComponent },
  { path: 'todo/todo-edit', component: ToDoEditComponent },
  { path: 'todo/todo-detail', component: ToDoDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoDetailComponent,
    ToDoAddComponent,
    ToDoEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
