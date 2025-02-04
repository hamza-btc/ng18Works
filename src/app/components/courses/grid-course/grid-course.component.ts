import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { CardCourseComponent } from '../card-course/card-course.component';

@Component({
  selector: 'app-grid-course',
  imports: [CardCourseComponent],
  templateUrl: './grid-course.component.html',
  styleUrl: './grid-course.component.css',
})
export class GridCourseComponent {
  @Input({ alias: 'coursealias', required: true }) dataCourses: Course[] = [];
  @Output() delete = new EventEmitter();

  requestDeleteCourse(id: number | undefined) {
    this.delete.emit(id);
  }
}
