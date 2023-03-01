import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent {
  constructor(private scroller: ViewportScroller, private router: Router) { }

  goToContact() {
    this.scroller.scrollToAnchor("contact");
  }

}
