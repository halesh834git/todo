import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css']
})
export class ToDoEditComponent implements OnInit {

  public todo: ToDo = {} as ToDo;
  constructor(public route: Router, public actRoute: ActivatedRoute, public todoService: TodoService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.queryParams['id'];
    this.todo = this.todoService.getToDoById(id);
    // console.log(this.todo);
  }

  public OnBackToList() {
    this.route.navigate(['/']);
  }

  public onSave() {
    this.todoService.editToDo(this.todo);
    // console.log(this.todoService.todoList);
    this.OnBackToList();
  }

}
