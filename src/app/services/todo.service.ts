import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

@Injectable()
export class TodoService {

  public todoList: ToDo[] = [
  ];

  constructor(private _http: Http, public localStorageService: LocalStorageService) { }

  public token : any;

  getToken() {
   this.token = this.localStorageService.get('todoToken');
   return this.token;
  }

  setToken() {
    this.localStorageService.set('todoToken', "123");
  }

  getAllToDos() {
    return this.todoList;
  }

  getToDoById(id: number) {
    return this.todoList.find(x => x.Id == id);
  }

  editToDo(todo: ToDo) {
    console.log(todo.Id);
    this.todoList[todo.Id] = todo;
  }

  addToDo(todo: ToDo) {
    this.todoList.push(todo);
  }

  removeToDo(id: number) {
    let item = this.todoList.find(x => x.Id == id);
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1)
  }
}

export interface ToDo {
  Id: number;
  Title: string;
  Notes: string;
  DueDate: Date;
  IsCompleted?: boolean;
  CreatedOn?: Date;
  ModifieOn?: Date;
}