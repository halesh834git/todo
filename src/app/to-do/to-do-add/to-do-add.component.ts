import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService, ToDo } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent implements OnInit {

  public todo: ToDo = {} as ToDo;
  constructor(public route: Router, public todoService: TodoService) { }

  ngOnInit() {
  }

  public OnBackToList() {
    this.route.navigate(['/']);
  }

  public onSave() {
    let lastIndex: number;
    if (this.todoService.todoList.length > 1) {
      lastIndex = this.todoService.todoList[this.todoService.todoList.length - 1].Id;
    }
    else {
      if (this.todoService.todoList.length == 1) {
        lastIndex = 2;
      }
      else {
        lastIndex = 1;
      }
    }
    // console.log(lastIndex);
    
    this.todo.Id = lastIndex;
    this.todoService.addToDo(this.todo);
    this.todoService.todoList;
    this.OnBackToList();
  }
}
