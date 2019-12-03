import { Component, OnInit } from "@angular/core";
import { ChannelService } from "../channel.service";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-section",
  templateUrl: "./news-section.component.html",
  styleUrls: ["./news-section.component.css"]
})
export class NewsSectionComponent implements OnInit {
  constructor(
    private _channelService: ChannelService,
    private news: NewsService
  ) {}
  readMore: Boolean;
  ngOnInit() {
    this.news.getLatestNews(this._channelService.all_channel.url);
    this.readMore = false;
  }

  redirectToNewsSource = newsfeed => {
    window.location.href = newsfeed.url;
  };

  //This function filters news on the basis of filter keywords and selected channel
  filter(newsfeed) {
    return newsfeed.title.includes(this._channelService.filter_keyword);
  }

  toggleShowMoreDisplay() {
    this.readMore = !this.readMore;
  }

  //This function checks weather the news article contains any content or is empty.
  checkNewsContent(value:string) {
    if (value === null) return false;
    return true;
  }
}
