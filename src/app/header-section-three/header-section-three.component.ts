import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section-three',
  templateUrl: './header-section-three.component.html',
  styleUrls: ['./header-section-three.component.css']
})
export class HeaderSectionThreeComponent implements OnInit {
  //there is no channel selected at the begining so initialize with all.
  source_channel="all";
  constructor() { }

  ngOnInit() {
  }

}
