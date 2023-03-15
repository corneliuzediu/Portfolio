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
    if (this.getLocation() != '/') {
      let i = this.router.navigateByUrl('');
      setTimeout(() => {
        this.scroller.setOffset([0, 100]);
        this.scroller.scrollToAnchor("contact");
      }, 300);
    }

    if (this.getLocation() == '/') {
      this.scroller.setOffset([0, 100]);
      this.scroller.scrollToAnchor("contact");
    }

  }


  goToImpressum() {
    this.router.navigateByUrl('/impressum');
  }


  goToDataProtection() {
    this.router.navigateByUrl('/data-protection');
  }


  goToPrivacyPolicy() {
    this.router.navigateByUrl('/privacy-policy');
  }


  goToTheTop() {
    this.scroller.scrollToAnchor("top");
  }


  goToMainTop() {
    if (this.getLocation() != '/') {
      this.router.navigateByUrl('');
    }

    if (this.getLocation() == '/') {
      this.goToTheTop();
    }
  }


  getLocation() {
    let url = window.location.href;
    let location = url.substring(url.lastIndexOf(('/')));
    return location;
  }

}
