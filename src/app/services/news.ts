import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private http = inject(HttpClient);
  private baseUrl = 'https://berita-indo-api-next.vercel.app/api/cnn-news';

  // dynamic func
  getNewsByCategory(category: string) {
    // lowercase
    const endpoint = category.toLowerCase();
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`).pipe(
      map(response => response.data) // Ambil array datanya saja
    );
  }
}