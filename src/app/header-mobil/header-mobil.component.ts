import { ViewportScroller } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations'


@Component({
  selector: 'app-header-mobil',
  templateUrl: './header-mobil.component.html',
  styleUrls: ['./header-mobil.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('showMenuMobile', style({
        opacity: 1,
        transform: 'translate(0%, 0)'
      })),
      state('hideMenuMobile', style({
        opacity: 0,
        transform: 'translate(100%, 0)'
      })),
      transition('* <=> *', [
        animate('250ms')
      ])

    ])
  ]
})
export class HeaderMobilComponent {
  status: boolean = false;
  menuMobil: any;
  public event: string;



  constructor(
    private scroller: ViewportScroller,
    private router: Router,
    private element: ElementRef,
  ) {
    this.event = 'hideMenuMobile'
  }


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


  showMenu() {
    this.status = !this.status;
  }


  getLocation() {
    let url = window.location.href;
    let location = url.substring(url.lastIndexOf(('/')));
    return location;
  }
}
