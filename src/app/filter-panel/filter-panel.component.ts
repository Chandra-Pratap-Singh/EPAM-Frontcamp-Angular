import { Component, OnInit } from "@angular/core";
import { ChannelService } from "../channel.service";

@Component({
  selector: "app-filter-panel",
  templateUrl: "./filter-panel.component.html",
  styleUrls: ["./filter-panel.component.css"]
})
export class FilterPanelComponent implements OnInit {
  constructor(private _channel: ChannelService) {}

  ngOnInit() {}

  // This function updates the filter keywords in the srvice
  updateKeywords(value:string) {
    this._channel.filter_keyword = value;
  }
}
