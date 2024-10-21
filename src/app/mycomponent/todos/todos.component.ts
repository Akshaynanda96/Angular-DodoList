import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Todo } from '../../todosHedar';
import { TodosItemComponent } from "../todos-item/todos-item.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodosItemComponent], // Add CommonModule here
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todosHedar: Todo[];

  constructor() {
    this.todosHedar = []; // Initialize the array
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todosHedar.push(
      new Todo(1, 'Buy groceries', 'Milk, Bread, Eggs', true),
      new Todo(2, 'Clean the house', 'Living room and kitchen', true),
      new Todo(3, 'Clean the house', 'Living room and kitchen', true),
      new Todo(4, 'Clean the house', 'Living room and kitchen', true)
    );
  }
}