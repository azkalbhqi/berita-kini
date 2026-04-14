import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../services/news';
import { NewsCard } from '../news-card/news-card'; // Import card-nya

@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.html',
  imports: [NewsCard]
})
export class Section implements OnInit {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);

  activeCategory = signal<string>('');
  newsList = signal<any[]>([]);
  isLoading = signal<boolean>(false);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const category = params['category'] || 'nasional';
      this.activeCategory.set(category.replace('-', ' '));
      this.fetchNews(category);
    });
  }

  fetchNews(category: string) {
    this.isLoading.set(true);
    this.newsService.getNewsByCategory(category).subscribe({
      next: (data) => {
        this.newsList.set(data);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
}