import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ChannelService } from "../channel.service";
import { NewsService } from "../news.service";

@Component({
  selector: "app-source-list-dropdown",
  templateUrl: "./source-list-dropdown.component.html",
  styleUrls: ["./source-list-dropdown.component.css"]
})
export class SourceListDropdownComponent implements OnInit {
  //This is the list of available channels
  channelList;

  constructor(
    private channelService: ChannelService,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.channelService.updateChannelList();
    this.channelList = this.channelService.getChannelList();
  }

  //updates the service variable on selection of a channel
  updateNews(event, channelName:string) {
    this.channelService.activeChannel.next(channelName);
    this.newsService.getLatestNews(event.target.value);
  }
}
