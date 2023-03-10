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
    this.scroller.scrollToAnchor('about-me')
  }


  goToSkillsSet() {
    this.scroller.scrollToAnchor("skills-set");
  }


  goToProjectsBoard() {
    this.scroller.scrollToAnchor("projects-board");
  }

  
  goToTheTop() {
    this.scroller.scrollToAnchor('top')
  }


  showMenu() {
    this.status = !this.status;
  }
}
