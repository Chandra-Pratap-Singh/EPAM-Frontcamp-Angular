import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-news-article",
  templateUrl: "./news-article.component.html",
  styleUrls: ["./news-article.component.css"]
})
export class NewsArticleComponent implements OnInit {
  readComments: boolean = false;
  constructor(private newsService: NewsService, private router: Router) {}
  newsArticle: any;
  ngOnInit() {
    this.newsArticle = this.newsService.getNewsArticle();
  }

  toggleComments() {
    this.readComments = !this.readComments;
  }

  redirect(url) {
    window.open(url, "_blank");
  }

  goBack() {
    this.router.navigateByUrl("news");
  }
}
