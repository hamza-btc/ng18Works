import { Component, inject } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { User } from '../../models/user';
import { ListGithubComponent } from '../../components/github/list-github/list-github.component';
import { FormsModule } from '@angular/forms';
import { SkeletonCardComponent } from '../../components/shared/paginate/skeleton-card/skeleton-card.component';
import { LoadingComponent } from '../../components/shared/paginate/loading/loading.component';

@Component({
  selector: 'app-github',
  imports: [
    ListGithubComponent,
    FormsModule,
    SkeletonCardComponent,
    LoadingComponent,
  ],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {
  isVisible: boolean = false;
  search: string = '';
  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  show() {
    this.isVisible = true;
  }
  private githubApiService = inject(GithubApiService);

  getUsers() {
    this.githubApiService.getAllUsers().subscribe({
      next: (data) => console.log((this.users = data)),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }

  searchUsers() {
    if (!this.search.trim()) {
      this.getUsers();
      return;
    }
    this.githubApiService.searchUsers(this.search).subscribe({
      next: (res) => {
        this.users = res;
      },
    });
  }
}
