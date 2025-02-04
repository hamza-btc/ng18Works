import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Notification } from '../../models/notification';
import { EditIconComponent } from '../../components/icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../components/icons/delete-icon/delete-icon.component';

@Component({
  selector: 'app-todos',
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    EditIconComponent,
    DeleteIconComponent,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  title: string = 'Master you Day!';
  edit: boolean = false;
  defaultTodo: string = 'Write a todo...';
  shwoForm: boolean = false;
  todos: string[] = ['learn angular', 'React Js', 'Svelte', 'Spring'];
  myTodo: string = '';
  editable: boolean = false;
  todoIndex: number | null = null;
  notify: boolean = false;

  ngOnInit() {}

  toggleForm() {
    this.shwoForm = !this.shwoForm;
  }

  triggerNotify(cusutmNotify: Notification) {
    this.notification = {
      ...cusutmNotify,
    };
    this.notify = true;
    setTimeout(() => {
      this.notify = false;
    }, 2000);
  }

  showTitle() {
    return this.edit == true ? 'Edit my todos' : 'Show all todos';
  }

  changeToggleButton() {
    return this.shwoForm ? 'Hide' : 'Show';
  }

  addTodo() {
    this.todos = [this.myTodo, ...this.todos];
    this.triggerNotify({
      message: 'Todo created Succefuly',
      position: 'toast-top toast-end',
      alertClass: 'alert-success',
      duration: 90000,
    });
    this.initTodo();
  }

  editTodo(todo: string, index: number) {
    this.myTodo = todo;
    this.shwoForm = true;
    this.editable = true;
    this.todoIndex = index;
    console.log(' this.todoIndex ', this.todoIndex);
  }
  updateTodo() {
    if (this.todoIndex !== null) {
      this.todos[this.todoIndex] = this.myTodo;
      this.triggerNotify({
        message: 'Todo updated Succefuly',
        position: 'toast-up toast-end',
        alertClass: 'alert-warning',
        duration: 3000,
      });
    }
    this.initTodo();
  }

  deleteTodo(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete Todo!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.triggerNotify({
          message: 'Todo deleted Succefuly',
          position: 'toast-middle toast-end',
          alertClass: 'alert-error',
          duration: 3000,
        });
        this.todos = this.todos.filter((item, i) => i !== index);
        Swal.fire({
          title: 'Todo is Deleted!',
          text: 'Your todo  has been deleted.',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
        });
      }
    });
    // if (confirm(' Are you to sure de delete this task')) {
    //   this.todos = this.todos.filter((item, i) => i !== index);
    // }
  }

  initTodo() {
    this.editable = false;
    this.todoIndex = null;
    this.shwoForm = false;
    this.myTodo = '';
  }

  notification: Notification = {
    message: '',
    position: '',
    alertClass: '',
    duration: 3000,
  };

  cancel() {
    this.initTodo();
    this.triggerNotify({
      message: 'Updated canceld',
      position: 'toast-end',
      alertClass: 'alert-error',
      duration: 2000,
    });
  }
  submit() {
    if (!this.validateTodo()) {
      return;
    }
    if (this.editable) {
      this.updateTodo();
    } else {
      this.addTodo();
    }
  }
  validateTodo() {
    if (!this.myTodo) {
      this.triggerNotify({
        message: 'Todo is required',
        position: 'toast-end',
        alertClass: 'alert-error',
        duration: 2000,
      });

      return false;
    }
    return true;
  }
}
