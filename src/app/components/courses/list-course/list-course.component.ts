import { Course } from './../../../models/course';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';

@Component({
  selector: 'app-list-course',
  imports: [DeleteIconComponent, EditIconComponent],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css',
})
export class ListCourseComponent {
  @Input({ alias: 'coursealias', required: true }) dataCourses: Course[] = [];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  requestDeleteCourse(id: number | undefined) {
    this.delete.emit(id);
  }
  requestEditCourse(course: Course) {
    this.edit.emit(course);
  }
}
