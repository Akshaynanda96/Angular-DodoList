import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../todosHedar';

@Component({
  selector: 'app-todos-item',
  standalone: true,
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent implements OnInit {
  @Input() todo!: Todo; 
  constructor() {
    
  }
  ngOnInit(): void {
      
  }
}
