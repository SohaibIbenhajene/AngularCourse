import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }
}
