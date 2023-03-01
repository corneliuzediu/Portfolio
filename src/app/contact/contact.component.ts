import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private scroller: ViewportScroller, private router: Router) { }

  goToTheTop() {
    this.scroller.scrollToAnchor("top");
  }
}
