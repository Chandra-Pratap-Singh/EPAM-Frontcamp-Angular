import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class NewsArticleGuard implements CanActivate {
  constructor(private newsService: NewsService, private router: Router){}
  canActivate(): boolean{
    if(this.newsService.newsArticle) return true;
    else {
      // console.log(this.newsService.newsArticle);
      this.router.navigateByUrl('news');
      return false;
    }
  }
  
}
