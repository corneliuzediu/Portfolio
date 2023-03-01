import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private scroller: ViewportScroller, private router: Router) { }


  goToAboutMe(){
    this.scroller.scrollToAnchor('about-me')
  }


  goToSkillsSet() {
    this.scroller.scrollToAnchor("skills-set");
  }


  goToProjectsBoard() {
    this.scroller.scrollToAnchor("projects-board");
  }

  goToTheTop(){
    this.scroller.scrollToAnchor('top')
  }
}
