import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ChannelService {
  all_channel = {
    name: "ALL",
    id: "all",
    url:
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=b036cb7b801f4bc580212febf53bfcc9"
  };
  channel_list: { name: string; id: string; url: string }[] = [
    this.all_channel
  ];
  channel = "all";
  filter_keyword = "";
  constructor(private http: HttpClient) {}

  getActiveChannel() {
    return this.channel;
  }

  activeChannel = new Subject<any>();

  updateChannelList() {
    return this.http
      .get(
        "https://newsapi.org/v2/sources?apiKey=b036cb7b801f4bc580212febf53bfcc9"
      )
      .subscribe((data: any) => {
        data.sources.forEach(({ id, name }) => {
          this.channel_list.push({
            id: id,
            name: name,
            url: `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=b036cb7b801f4bc580212febf53bfcc9`
          });
        });
      });
  }

  getChannelList() {
    return this.channel_list;
  }
}
