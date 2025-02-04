import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

interface Action {
  reaction?: {
    likes: number;
    dislikes: number;
  };
  views?: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private urlApi = 'http://localhost:3000/articles';
  private http = inject(HttpClient);

  all(): Observable<Article[]> {
    return this.http.get<Article[]>(this.urlApi);
  }

  save(data: Article): Observable<Article> {
    return this.http.post<Article>(this.urlApi, data);
  }

  get(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.urlApi}/${id}`);
  }

  update(id: number, data: Article): Observable<Article> {
    return this.http.patch<Article>(`${this.urlApi}/${id}`, data);
  }

  destroy(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.urlApi}/${id}`);
  }
  actions(id: number, data: Action) {
    return this.http.patch<Article>(`${this.urlApi}/${id}`, data);
  }
}
