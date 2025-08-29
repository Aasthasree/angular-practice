import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) {
    
  }

  getPosts() {
    return this.http.get(this.apiUrl);
  }

}
