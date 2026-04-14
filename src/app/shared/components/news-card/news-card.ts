import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styles: ``,
})
export class NewsCard {

  @Input({ required: true }) article: any;
}
