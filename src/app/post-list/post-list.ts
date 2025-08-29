import { Component, OnInit } from '@angular/core';
import { post, PostService } from '../post-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
})
export class PostList implements OnInit {
  posts: post[] = [];
  isLoading = true;
  error: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
        this.isLoading = false;
      },
    });
  }
}
