import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private scroller: ViewportScroller, private router: Router) { }

  goToContact() {
    this.scroller.setOffset([0, 100])
    this.scroller.scrollToAnchor("contact");
  }
}
