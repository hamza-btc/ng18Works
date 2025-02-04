import { Component, OnInit } from '@angular/core';
import { FormCourseComponent } from '../../components/courses/form-course/form-course.component';
import { GridCourseComponent } from '../../components/courses/grid-course/grid-course.component';
import { ListCourseComponent } from '../../components/courses/list-course/list-course.component';
import { Course } from '../../models/course';
import { AddIconComponent } from '../../components/icons/add-icon/add-icon.component';
import { ceil, random, range, slice } from 'lodash';
import { FormsModule } from '@angular/forms';
import { courseList } from '../../data';
import { NgClass } from '@angular/common';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-courses',
  imports: [
    FormCourseComponent,
    GridCourseComponent,
    ListCourseComponent,
    AddIconComponent,
    FormsModule,
    PaginationComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  list: boolean = true;
  toggleCourse: boolean = false;
  temporaryCourse!: Course;
  edit: boolean = false;
  perPage: number = 6;
  curentPage!: number;
  // const perPage = +perPage;
  courses: Course[] = courseList;
  pages: number[] = [];

  ngOnInit(): void {
    this.initPaginate();
  }
  initPaginate() {
    this.pages = range(1, ceil(courseList.length / this.perPage) + 1);
    this.paginate();
  }
  paginate(page: number = 1) {
    this.curentPage = page;
    const offset = (page - 1) * this.perPage;
    this.courses = slice(courseList, offset, offset + this.perPage);
  }

  changeView(etat: boolean) {
    this.list = etat;
  }

  initForm() {
    this.temporaryCourse = {
      title: '',
      url: '',
      price: '',
      content: '',
      active: true,
    };
  }
  deleteCourse(id: number) {
    this.courses = this.courses.filter((data) => data.id !== id);
  }
  saveCourse(course: Course) {
    let myCourse: Course = {
      ...course,
      id: random(10, 200),
    };

    this.courses = [myCourse, ...this.courses];
    this.showCourse();
    this.initForm();
  }

  showCourse() {
    this.toggleCourse = !this.toggleCourse;
  }
  editCourse(course: Course) {
    this.temporaryCourse = course;
    this.toggleCourse = true;
    this.edit = true;
  }

  updateCourse(course: Course) {
    this.courses = this.courses.map((item) =>
      item.id === course.id ? course : item,
    );
    this.initForm();
    this.edit = false;
    this.toggleCourse = false;
  }
}
