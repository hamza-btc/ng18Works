import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { Article } from '../../../models/article';
import { Location } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css',
})
export class ArticleEditComponent implements OnInit {
  categoryService = inject(CategoryService);
  route = inject(ActivatedRoute);
  blogService = inject(BlogService);
  router = inject(Router);
  location = inject(Location);
  id!: number;

  articleForm!: FormGroup;
  constructor() {
    this.articleForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl('', [Validators.required, Validators.minLength(5)]),
      category: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.route.params.subscribe((res) => {
      console.log('res de ngonoinit ', res);
      this.loadArticle(res['id']);
      this.id = res['id'];
    });
  }

  loadArticle(id: number) {
    this.blogService.get(id).subscribe((res) => {
      console.log('res de load article', res);
      this.articleForm.patchValue(res);
    });
  }

  submit() {
    if (this.articleForm.invalid) {
      return;
    }
    console.log(' this.articleForm value', this.articleForm.value);
    const myArticle: Article = {
      ...this.articleForm.value,
    } as Article;
    this.blogService.update(this.id, myArticle).subscribe({
      next: () => {
        this.location.back();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  get title() {
    return this.articleForm.get('title');
  }

  get body() {
    return this.articleForm.get('body');
  }

  get image() {
    return this.articleForm.get('image');
  }

  get category() {
    return this.articleForm.get('category');
  }
}
