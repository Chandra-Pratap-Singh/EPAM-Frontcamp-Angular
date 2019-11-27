import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-news',
  template: '{{fullNewsContent}}',
})
export class FullNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //getting data from parent - full content of the news
  @Input() public fullNewsContent;

}
