import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent {
  @ViewChild('topTitle') topTitle!: ElementRef;

  constructor(private scroller: ViewportScroller, private router: Router) { }

  goToContact() {
    this.scroller.setOffset([0, 100])
    this.scroller.scrollToAnchor("contact");
  }

}
