import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories = signal<Category[]>([]);
  http = inject(HttpClient);
  apiUrl = 'http://localhost:3000/categories';

  all(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
