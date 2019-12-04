import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

export interface NewsFeed {
  title: string;
  publishedAt: Date;
  source: { id: string; name: string };
  content: string;
}

@Injectable({
  providedIn: "root"
})
export class NewsService {
  data: NewsFeed[] = [];
  constructor(private http: HttpClient) {}

  newsArticle: any;

  updatedNews = new Subject<any>();

  updateNewsArticle(value) {
    console.log(value);
    this.newsArticle = value;
  }

  getNewsArticle() {
    return this.newsArticle;
  }

  getLatestNews(url) {
    this.http.get(url).subscribe((rowData: any) => {
      this.data = rowData.articles;
      this.updatedNews.next(this.data);
    });
  }
}
