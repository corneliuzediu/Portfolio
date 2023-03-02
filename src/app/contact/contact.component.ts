import { ViewportScroller } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameContact') nameContact!: ElementRef;
  @ViewChild('emailContact') emailContact!: ElementRef;
  @ViewChild('messageContact') messageContact!: ElementRef;
  @ViewChild('sentButton') sentButton!: ElementRef;

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {

  }


  async sendMail() {
    let nameContact = this.nameContact.nativeElement
    let emailContact = this.emailContact.nativeElement
    let messageContact = this.messageContact.nativeElement
    let sentButton = this.sentButton.nativeElement


    this.disableContactFields(nameContact, emailContact, messageContact, sentButton);

    //sending animation

    let fd = new FormData();
    fd.append('name', nameContact.value);
    fd.append('email', emailContact.value);
    fd.append('message', messageContact.value)
    // senden
    debugger;
    await fetch('https://corneliu-zediu.developerakademie.net/Contact%20form/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );


    //Text succes
    this.clearContactFields(nameContact, emailContact, messageContact, sentButton);
    this.enableContactFields(nameContact, emailContact, messageContact, sentButton)

  }

  disableContactFields(nameContact, emailContact, messageContact, sentButton) {
    nameContact.disabled = true;
    emailContact.disabled = true;
    messageContact.disabled = true;
    sentButton.disabled = true;
  }


  enableContactFields(nameContact, emailContact, messageContact, sentButton) {
    nameContact.disabled = false;
    emailContact.disabled = false;
    messageContact.disabled = false;
    sentButton.disabled = false;
  }


  clearContactFields(nameContact, emailContact, messageContact, sentButton) {
    nameContact.value = '';
    emailContact.value = '';
    messageContact.value = '';
    sentButton.value = '';
  }




  goToTheTop() {
    this.scroller.scrollToAnchor("top");
  }
}