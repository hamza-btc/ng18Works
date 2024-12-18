import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  title: string = 'Master you Day!';
  edit: boolean = false;
  defaultTodo: string = 'Write a todo...';
  shwoForm: boolean = false;
  todos: string[] = ['learn angular', 'React Js', 'Svelte', 'Spring'];

  toggleForm() {
    this.shwoForm = !this.shwoForm;
  }

  showTitle() {
    return this.edit == true ? 'Edit my todos' : 'Show all todos';
  }

  changeToggleButton() {
    return this.shwoForm ? 'Hide' : 'Show';
  }
}
