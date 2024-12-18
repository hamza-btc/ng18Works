import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './pages/todos/todos.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng18-first-project';
}
