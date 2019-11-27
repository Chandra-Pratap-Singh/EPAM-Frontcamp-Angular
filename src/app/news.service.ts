import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=b036cb7b801f4bc580212febf53bfcc9';
  data = [];
  constructor(private http: HttpClient) {
  }



  get_latest_news() {
    this.http.get(this.url).subscribe((rowData: any) => {
      this.data = rowData.articles;
    })
  }

  update_url(value) {
    this.url = value;
  }
}
