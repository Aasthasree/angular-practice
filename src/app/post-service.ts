import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

getPosts(): Observable<post[]> {
  return this.http.get<post[]>(this.apiUrl);
}

}
