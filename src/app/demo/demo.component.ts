import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [DataService]
})
export class DemoComponent implements OnInit {
  title = 'Protractor Test';
  todoList: any;

  newTodoTitle: string;
  index: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(data => {
      this.todoList = data as JSON;
      this.index = this.todoList.length + 1;
    });
  }

  addTodo() {
    const newTodo = {id: this.index++, title: this.newTodoTitle, isComplete: false};
    this.dataService.addData(newTodo).subscribe(data => {
      this.getData();
    });
  }

  deleteTodo(todo) {
    this.dataService.deleteData(todo.id).subscribe(data => {
      this.getData();
    });
  }

  changeComplete(todo) {
    const changeTodo = {id: todo.id, title: todo.title, isComplete: !todo.isComplete}
    this.dataService.changeData(todo.id, changeTodo).subscribe(data => {
      this.getData();
    });
  }
}
