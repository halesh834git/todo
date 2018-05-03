import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService, ToDo } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {

  public todo: ToDo = {} as ToDo;
  constructor(public route: Router, public actRoute: ActivatedRoute, public todoService: TodoService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.queryParams['id'];
    console.log(id);
    this.todo = this.todoService.getToDoById(id);

  }

  public OnBackToList() {
    this.route.navigate(['/']);
  }

}
