import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-card-course',
  imports: [DeleteIconComponent, EditIconComponent],
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css',
})
export class CardCourseComponent {
  @Input() course!: Course;
  @Output() delete = new EventEmitter();

  requestDeleteCourse(id: number | undefined) {
    this.delete.emit(id);
  }
}
