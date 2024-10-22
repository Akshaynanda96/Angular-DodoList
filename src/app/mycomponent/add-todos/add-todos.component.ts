import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todosHedar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todos.component.html',
  styleUrl: './add-todos.component.css'
})
export class AddTodosComponent  {
  title !: string; 
  Decs !: string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  onSumbit(){
    console.log(this.title, this.Decs);
    const todos = {
      srno : 8,
      title : this.title,
      description :   this.Decs,
      activate : true,
  }
  this.todoAdd.emit(todos)
}
}
