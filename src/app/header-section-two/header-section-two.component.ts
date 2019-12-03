import { Component, OnInit } from "@angular/core";
import { ChannelService } from "../channel.service";

@Component({
  selector: "app-header-section-two",
  templateUrl: "./header-section-two.component.html",
  styleUrls: ["./header-section-two.component.css"]
})
export class HeaderSectionTwoComponent implements OnInit {
  activeChannel: string = "ALL";
  constructor(private channelService: ChannelService) {
    channelService.activeChannel.subscribe(value => {
      this.activeChannel = value;
    });
  }
  ngOnInit() {}
}
