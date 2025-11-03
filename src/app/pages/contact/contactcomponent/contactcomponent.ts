import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactcomponent',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './contactcomponent.html',
  styleUrl: './contactcomponent.scss',
})
export class Contactcomponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Message sent:', this.contactForm.value);
      alert('✅ Your message has been sent successfully!');
      this.contactForm.reset();
    }
  }
}
