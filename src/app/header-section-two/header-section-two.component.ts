import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-header-section-two',
  templateUrl: './header-section-two.component.html',
  styleUrls: ['./header-section-two.component.css']
})
export class HeaderSectionTwoComponent implements OnInit {

  constructor(private _channel: ChannelService) { }

  ngOnInit() {
  }

  //updating channel with service variable
  channel=this._channel.channel;

}
