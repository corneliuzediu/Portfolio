import { ViewportScroller } from '@angular/common';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('logo') logo!: ElementRef;

  public location: any;

  constructor(private scroller: ViewportScroller, private router: Router) { }



  goToAboutMe() {
    if (this.getLocation() != '/') {
      let i = this.router.navigateByUrl('');
      setTimeout(() => this.scroller.scrollToAnchor('about-me'), 300);
    }

    if (this.getLocation() == '/') {
      this.scroller.scrollToAnchor('about-me')
    }
  }


  goToSkillsSet() {
    if (this.getLocation() != '/') {
      let i = this.router.navigateByUrl('');
      setTimeout(() => this.scroller.scrollToAnchor("skills-set"), 300);
    }

    if (this.getLocation() == '/') {
      this.scroller.scrollToAnchor("skills-set");
    }
  }


  goToProjectsBoard() {
    if (this.getLocation() != '/') {
      let i = this.router.navigateByUrl('');
      setTimeout(() => this.scroller.scrollToAnchor("projects-board"), 300);
    }

    if (this.getLocation() == '/') {
      this.scroller.scrollToAnchor("projects-board");
    }
  }


  goToTheTop() {
    this.scroller.scrollToAnchor('top')
  }


  goToMain() {
    if (this.getLocation() != '/') {
      this.router.navigateByUrl('');
    }

    if (this.getLocation() == '/') {
      this.animateLogo();
    }
  }


  getLocation() {
    let url = window.location.href;
    let location = url.substring(url.lastIndexOf(('/')));
    return location;
  }


  animateLogo() {
    this.logo.nativeElement.style = "rotate:30deg";
    setTimeout(() => this.logo.nativeElement.style = "rotate:-15deg", 200)
    setTimeout(() => this.logo.nativeElement.style = "rotate:-30deg", 300)
    setTimeout(() => this.logo.nativeElement.style = "rotate:0deg", 400)
    setTimeout(() => this.logo.nativeElement.style = "rotate:15deg", 500)
    setTimeout(() => this.logo.nativeElement.style = "rotate:30deg", 600)
    setTimeout(() => this.logo.nativeElement.style = "rotate:0deg", 700)
  }

}