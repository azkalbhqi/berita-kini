import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private http = inject(HttpClient);
  // Point to the proxy prefix defined in proxy.conf.json
  private baseUrl = '/api-news/cnn-news'; 

  getNewsByCategory(category: string) {
    const endpoint = category.toLowerCase();
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`).pipe(
      map(response => response.data)
    );
  }
}