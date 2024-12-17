import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as deutsch } from '../shared/i18n/de';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  sent : boolean;
  

  constructor(private _translationLoaderService: TranslationLoaderService, private fb: FormBuilder) {
    this._translationLoaderService.loadTranslations(english, deutsch);
    this.sent = false;
  
  }

  async send(){

    emailjs.init(environment.emailJsKey);

    let response = await emailjs.send(environment.serviceId, environment.templateId, {
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message
    });

    this.form.reset();
    this.sent = true;
    setTimeout(() => { this.sent=false; }, 5000);
    
    
  }

  ngOnInit(): void {
   
  }
}
