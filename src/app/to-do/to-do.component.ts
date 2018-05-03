import { Component, OnInit } from '@angular/core';
import { TodoService, ToDo } from '../services/todo.service';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  private todos: ToDo[];
  constructor(public todoService: TodoService) { }
  isLogged: boolean = false;
  ngOnInit() {
    let check = this.todoService.getToken();
    if(check == null) {

    }
    else {
      console.log(check);
      
      this.loadToDos();
      this.isLogged = true;
    }
  }

  onLogIn() {
    this.todoService.setToken();
    this.isLogged = true;
    this.loadToDos();
  }

  public loadToDos() {
    this.todos = this.todoService.getAllToDos();
  }

  public onStatusChange(id: number) {
    let temp = this.todos.find(x=>x.Id == id);
    temp.IsCompleted = ! temp.IsCompleted    
  }

  public OnDelete(id: number) {
    // delete
    var conf = confirm('are you sure to delete');
    if (conf == true) {
      this.todoService.removeToDo(id);
      this.loadToDos();
    }
  }
}
