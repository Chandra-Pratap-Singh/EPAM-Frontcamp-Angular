import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<footer class="fixed-bottom">&copy;BestNews</footer>',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
