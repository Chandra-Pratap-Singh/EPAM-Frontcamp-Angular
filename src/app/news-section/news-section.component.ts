import { Component, OnInit } from "@angular/core";
import { ChannelService } from "../channel.service";
import { NewsService } from "../news.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-news-section",
  templateUrl: "./news-section.component.html",
  styleUrls: ["./news-section.component.css"]
})
export class NewsSectionComponent implements OnInit {
  readMore: Boolean;
  data:any;
  constructor(
    private _channelService: ChannelService,
    private news: NewsService,
    private router: Router
  ) {
    this.news.updatedNews.subscribe(value=>{
      this.data=value;
    })
   }

  ngOnInit() {
    this.news.getLatestNews(this._channelService.all_channel.url);
    this.readMore = false;
    this.data=this.news.data
  }

  redirectToNewsSource = newsfeed => {
    window.open(newsfeed.url, '_blank');
  };

  //This function filters news on the basis of filter keywords and selected channel
  filter(newsfeed) {
    return newsfeed.title.includes(this._channelService.filter_keyword);
  }

  toggleShowMoreDisplay(value) {
    this.news.updateNewsArticle(value);
    this.router.navigateByUrl('news-article');
    // this.readMore = !this.readMore;
  }

  //This function checks weather the news article contains any content or is empty.
  checkNewsContent(value: string) {
    if (value === null) return false;
    return true;
  }

}
