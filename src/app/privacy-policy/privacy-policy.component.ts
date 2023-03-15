import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  constructor(private route: ActivatedRoute, private router: Router, private scroller: ViewportScroller) {
  }

  goToMain() {
    if (this.getLocation() != '/') {
      this.router.navigateByUrl('');
    }
  }


  goToDataProtection() {
    this.router.navigateByUrl('/data-protection');
  }


  goToPrivacyPolicy() {
    this.router.navigateByUrl('/privacy-policy');
  }


  getLocation() {
    let url = window.location.href;
    let location = url.substring(url.lastIndexOf(('/')));
    return location;
  }


  scrollToElement($element) {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
