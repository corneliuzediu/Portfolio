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
  @ViewChild('sendingAnimation') sendingAnimation!: ElementRef;
  @ViewChild('succesfullySubmited') succesfullySubmited!: ElementRef;
  @ViewChild('flyIcon') flyIcon!: ElementRef;


  contactForm = new FormGroup({
    nameFormControl: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z .'-]+$")]),
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    messageFormControl: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  responseBackend: any;
  emailSent: boolean = false;
  validName: boolean = true;
  validEmail: boolean = true;
  validMessage: boolean = true;


  //For animations
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  public initTime: Date = new Date;
  waitedTime: any;

  constructor(private scroller: ViewportScroller, private router: Router) { }


  ngOnInit(): void { }

  async onSubmit(ngForm: any) {
    if (this.contactForm.valid) {
      this.emailSent = true;
      let nameContact = this.nameContact.nativeElement
      let emailContact = this.emailContact.nativeElement
      let messageContact = this.messageContact.nativeElement
      await this.sendToBackend(nameContact, emailContact, messageContact)
    } else {
      this.showErrors()
    }
  }


  async sendToBackend(nameContact, emailContact, messageContact) {
    let fd = new FormData();
    fd.append('name', nameContact.value);
    fd.append('email', emailContact.value);
    fd.append('message', messageContact.value);
    this.showSendingAnimation();
    await this.getResponseBackend(fd);
  }


  async getResponseBackend(fd) {
    try {
      const response = await fetch('https://corneliu-zediu.com/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd,
        }
      );

      if (response.ok) {
        this.responseBackend = await response.json();
        this.finishAnimation();
      } else {
        this.finishAnimation();
      }
    } catch (error) {
      console.error(error);
    }
  }


  showErrors() {
    if (this.contactForm.controls['nameFormControl'].status === 'INVALID') {
      this.validName = false;
    }
    if (this.contactForm.controls['emailFormControl'].status === 'INVALID') {
      this.validEmail = false;
    }
    if (this.contactForm.controls['messageFormControl'].status === 'INVALID') {
      this.validMessage = false;
    }

    setTimeout(() => {
      this.validName = true;
      this.validEmail = true;
      this.validMessage = true;
      this.emailSent = false;
    }, 2000)
  }


  checkValidity(input: string) {
    switch (input) {
      case 'nameFormControl':
        this.validName = this.contactForm.controls[input].valid || !this.contactForm.controls[input].touched;
        break;
      case 'emailFormControl':
        this.validEmail = this.contactForm.controls[input].valid || !this.contactForm.controls[input].touched;
        break;
      case 'messageFormControl':
        this.validMessage = this.contactForm.controls[input].valid || !this.contactForm.controls[input].touched;
        break;
      default:
        break;
    }
  }



  get name() {
    return this.contactForm.get('nameFormControl');
  }


  get email() {
    return this.contactForm.get('emailFormControl');
  }


  get message() {
    return this.contactForm.get('messageFormControl');
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


  finishAnimation() {
    this.contactForm.reset();
    this.contactForm.markAsPristine();
    this.contactForm.updateValueAndValidity();
    this.provideAnimation();
    setTimeout(() => {
      this.removeAnimation();
      this.emailSent = false;
    }, 1500)
  }


  removeAnimation() {
    this.flyIcon.nativeElement.classList.remove('flying-animation')
    this.succesfullySubmited.nativeElement.classList.add('d-none')
  }
}