import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  data = [];
  constructor(private http: HttpClient) {}

  getLatestNews(url) {
    this.http.get(url).subscribe((rowData: any) => {
      this.data = rowData.articles;
    });
  }
}
