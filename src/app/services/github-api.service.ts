import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SearchResponse, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  urlApi: string = 'https://api.github.com';

  private http = inject(HttpClient);

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users`);
  }

  searchUsers(search: string): Observable<User[]> {
    return this.http
      .get<SearchResponse>(`${this.urlApi}/search/users?q=${search}`)
      .pipe(map((res) => res.items));
  }
}
