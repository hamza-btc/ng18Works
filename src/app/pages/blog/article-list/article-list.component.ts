import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { Article } from '../../../models/article';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ArticleCardComponent } from '../../../components/article-card/article-card.component';

@Component({
  selector: 'app-article-list',
  imports: [RouterLink, AsyncPipe, ArticleCardComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  blogSerivice = inject(BlogService);
  articles = signal<Article[]>([]);

  ngOnInit() {
    this.blogSerivice.all().subscribe((res) => this.articles.set(res));
  }
}
