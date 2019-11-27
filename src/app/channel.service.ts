import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  all_channel = {name: 'ALL', id: 'all'}
  channel_list=[this.all_channel];
  channel='all';
  filter_keyword='';
  constructor(private http: HttpClient) { }

  //This function updates the selected channel
  update_active_channel(value){
    this.channel=value;
  }

  //This function returns the current selected channel
  get_active_channel(){
    return this.channel;
  }

  update_channel_list(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey=b036cb7b801f4bc580212febf53bfcc9').subscribe((data: any) => {
      data.sources.forEach(element => {
        let temp = {name : element.name,id: element.id}
        this.channel_list.push(temp);
      });
    })
  }

  get_channel_list(){
    return this.channel_list;
  }

}
