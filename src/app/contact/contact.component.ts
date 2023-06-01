import { ViewportScroller } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  @ViewChild('sendingAnimation') sendingAnimation!: ElementRef;
  @ViewChild('succesfullySubmited') succesfullySubmited!: ElementRef;
  @ViewChild('flyIcon') flyIcon!: ElementRef;


  sendMessage = new FormGroup({
    nameFormControl: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[A-Za-z .'-]+$")]),
    emailFormControl: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$")]),
    messageFormControl: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  responseBackend: any;
  public initTime: Date = new Date;
  waitedTime: any;

  constructor(private scroller: ViewportScroller, private router: Router) { }


  ngOnInit(): void { }

  /**
   * The function is collecting the inputs and provide them further to be send to backend.
   */
  async sendMail() {
    if (!this.isFormEmpty()) {
      let nameContact = this.nameContact.nativeElement
      let emailContact = this.emailContact.nativeElement
      let messageContact = this.messageContact.nativeElement
      let sentButton = this.sentButton.nativeElement
      this.disableContactFields(nameContact, emailContact, messageContact, sentButton);
      await this.sendToBackend(nameContact, emailContact, messageContact, sentButton)
    }
  }


  isFormEmpty(): boolean {
    const controls = this.sendMessage.controls;
    return Object.keys(controls).some(controlName => {
      const control = controls[controlName];
      const value = control.value;
      return value === null || value === '';
    });
  }


  disableContactFields(nameContact, emailContact, messageContact, sentButton) {
    nameContact.disabled = true;
    emailContact.disabled = true;
    messageContact.disabled = true;
    sentButton.disabled = true;
  }


  /**
   * The function is sending the information to backend and get the response from it.
   * 
   * @param nameContact - Sender of the contact
   * @param emailContact - Email of the contact
   * @param messageContact - Message of the Contact
   * @param sentButton - HTML Element
   */
  async sendToBackend(nameContact, emailContact, messageContact, sentButton) {
    let fd = new FormData();
    fd.append('name', nameContact.value);
    fd.append('email', emailContact.value);
    fd.append('message', messageContact.value);
    this.showSendingAnimation();
    await this.getResponseBackend(fd, nameContact, emailContact, messageContact, sentButton);
  }


  async getResponseBackend(fd, nameContact, emailContact, messageContact, sentButton) {
    try {
      const response = await fetch('https://corneliu-zediu.com/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd,
        }
      );

      if (response.ok) {
        this.responseBackend = await response.json();
        this.finishAnimation(nameContact, emailContact, messageContact, sentButton);
      } else {
        this.finishAnimation(nameContact, emailContact, messageContact, sentButton);
      }
    } catch (error) {
      console.error(error);
    }
  }


  get name() {
    return this.sendMessage.get('nameFormControl');
  }


  get email() {
    return this.sendMessage.get('emailFormControl');
  }


  get message() {
    return this.sendMessage.get('messageFormControl');
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


  showSendingAnimation() {
    this.sendingAnimation.nativeElement.classList.remove('d-none')
  }


  goToTheTop() {
    this.scroller.scrollToAnchor("top");
  }


  provideAnimation() {
    this.sendingAnimation.nativeElement.classList.add('d-none')
    this.succesfullySubmited.nativeElement.classList.remove('d-none')
    this.flyIcon.nativeElement.classList.add('flying-animation')
  }


  removeAnimation() {
    this.flyIcon.nativeElement.classList.remove('flying-animation')
    this.succesfullySubmited.nativeElement.classList.add('d-none')
  }


  finishAnimation(nameContact, emailContact, messageContact, sentButton) {
    this.sendMessage.reset();
    this.markControlsAsValid();
    console.log(this.sendMessage);

    // this.clearContactFields(nameContact, emailContact, messageContact, sentButton);
    this.provideAnimation();
    setTimeout(() => {
      this.removeAnimation();
      this.enableContactFields(nameContact, emailContact, messageContact, sentButton)
    }, 1500)
  }


  markControlsAsValid() {
    const controls = this.sendMessage.controls;
    Object.keys(controls).forEach(controlName => {
      const control = controls[controlName];
      control.markAsUntouched();
      control.markAsPristine();
      control.setErrors(null);
    });
  }
}