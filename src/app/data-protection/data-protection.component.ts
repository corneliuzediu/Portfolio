import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent {
  // m716
  // m3
  // mOverview
  // m13
  // m27
  // m25
  // m24
  // m12
  // m134
  // m225
  // m182
  // m15
  // m10
  // m42

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
