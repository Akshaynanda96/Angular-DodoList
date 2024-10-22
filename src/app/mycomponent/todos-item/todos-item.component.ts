import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Todo } from '../../todosHedar';

@Component({
  selector: 'app-todos-item',
  standalone: true,
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent implements OnInit {
  @Input() todo !: Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  constructor() {
    
  }
  ngOnInit(): void {
      
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log(this.todo)
}
}