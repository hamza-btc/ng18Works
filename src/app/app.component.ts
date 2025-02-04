import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { Component, Inject, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './pages/todos/todos.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { BehaviorSubject, from, map, Observable, of, Subject } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { GithubComponent } from './pages/github/github.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    // TodosComponent,
    CoursesComponent,
    CoursesComponent,
    GithubComponent,
    CounterPageComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng18-first-project';

  ngOnInit(): void {}
}
