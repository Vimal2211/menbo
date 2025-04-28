import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  subscribeData = {
    email: ''
  };

  onSubmit() {
    // Handle contact form submission logic here
    console.log('Contact Form Submitted', this.contactData);
    // Reset form
    this.contactData = { name: '', email: '', message: '' };
    alert('Thank you for contacting us!');
  }

  onSubscribe() {
    // Handle subscription form submission logic here
    console.log('Subscription Form Submitted', this.subscribeData);
    // Reset form
    this.subscribeData = { email: '' };
    alert('Thank you for subscribing!');
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

}
