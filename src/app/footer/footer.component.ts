import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  date: any

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
    this.getYearFooter();
  }


  getYearFooter() {
    let newDate = new Date()
    this.date = newDate.getFullYear();
  }

  goToContact() {
    this.scroller.setOffset([0, 100])
    this.scroller.scrollToAnchor("contact");
  }
}
