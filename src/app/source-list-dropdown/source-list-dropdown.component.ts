import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChannelService } from '../channel.service'
import { NewsService } from '../news.service';

@Component({
  selector: 'app-source-list-dropdown',
  templateUrl: './source-list-dropdown.component.html',
  styleUrls: ['./source-list-dropdown.component.css']
})
export class SourceListDropdownComponent implements OnInit {

  //This is the list of available channels
  channel_list;

  constructor(private _channel: ChannelService, private news: NewsService) { }

  ngOnInit() {
    this._channel.update_channel_list();
    this.channel_list = this._channel.get_channel_list();
  }

  //updates the service variable on selection of a channel
  update_news(event) {
    this._channel.update_active_channel(event.target.value);
    if (event.target.value == "all")
      this.news.update_url(`https://newsapi.org/v2/top-headlines?country=in&apiKey=b036cb7b801f4bc580212febf53bfcc9`);
    else
      this.news.update_url(`https://newsapi.org/v2/top-headlines?sources=${event.target.value}&apiKey=b036cb7b801f4bc580212febf53bfcc9`);

    this.news.get_latest_news();

  }

}
