import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel.service'
import { NewsService } from '../news.service'

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent implements OnInit {

  // data; //variable that will contain the all the news articles
  constructor(private _channel: ChannelService, private news: NewsService) { }

  ngOnInit() {
    this.news.get_latest_news();
  }

  //This function takes user the source of the news.
  redirect_to_news_source = (newsfeed) => {
    window.location.href = newsfeed.url;
  }

  //This function filters news on the basis of filter keywords and selected channel 
  get(newsfeed) {
    if (this._channel.filter_keyword === '')
      return (newsfeed.source.id === this._channel.channel || this._channel.channel === 'all');
    else
      return (newsfeed.title.includes(this._channel.filter_keyword) && (newsfeed.source.id === this._channel.channel || this._channel.channel === 'all'));
  }

  //This function is responsible for read more and read less feature.
  toggle_show_more_display(shortContent, fullContent, event) {
    console.log(shortContent);
    console.log(fullContent);
    if (shortContent.style.display == 'block') {
      shortContent.style.display = 'none';
      fullContent.style.display = 'block';
      event.target.innerHTML = "Read Less";
    }
    else {
      shortContent.style.display = 'block';
      fullContent.style.display = 'none';
      event.target.innerHTML = 'Read More';
    }
  }

  //This function checks weather the news article contains any content or is empty.
  check_news_content(value) {
    if (value === null)
      return false;
    return true;
  }

}
