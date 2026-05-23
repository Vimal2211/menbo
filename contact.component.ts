import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    service: '',
    otherService: '',
    message: ''
  };
  
  // Track field validation state
  fieldTouched = {
    name: false,
    email: false,
    service: false,
    otherService: false,
    message: false
  };

  submitMessage = 'Send Message →';
  submitSuccess = false;
  submitError = '';
  isSubmitting = false;

  // EmailJS Credentials
  serviceId = 'service_s2qc95s'; // Your EmailJS service ID
  // templateId = 'template_5pj9trt'; // Your EmailJS template ID
  templateId = 'template_5fra0qd'; // Your EmailJS template ID
  publicKey = 'Uw-bBU_SizAeWY1JZ'; // Your EmailJS public key

  ngOnInit(): void {
    // No need to initialize here - will use publicKey in send()
  }

  // Mark field as touched
  markFieldTouched(field: string): void {
    this.fieldTouched[field as keyof typeof this.fieldTouched] = true;
    // Clear general error when user edits a field
    if (this.submitError) {
      this.submitError = '';
    }
  }

  // Validate individual field
  isFieldInvalid(field: string): boolean {
    const touched = this.fieldTouched[field as keyof typeof this.fieldTouched];
    const value = this.formData[field as keyof typeof this.formData];

    if (!touched) return false;

    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !value.trim() || !emailRegex.test(value);
    }

    if (field === 'service') {
      return !value.trim();
    }

    if (field === 'otherService') {
      if (this.formData.service !== 'Others') return false;
      return !value.trim();
    }

    return !value.trim();
  }

  // Get field error message
  getFieldError(field: string): string {
    const value = this.formData[field as keyof typeof this.formData];

    if (!value.trim()) {
      if (field === 'name') return 'Name is required.';
      if (field === 'email') return 'Email is required.';
      if (field === 'service') return 'Please select a service.';
      if (field === 'otherService') return 'Please specify your service.';
      if (field === 'message') return 'Message is required.';
    }

    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address.';
      }
    }

    return '';
  }

  // Check if entire form is valid
  isFormValid(): boolean {
    const allRequired = this.formData.name.trim() && 
                        this.formData.email.trim() && 
                        this.isValidEmail(this.formData.email) &&
                        this.formData.service.trim() &&
                        this.formData.message.trim();

    if (!allRequired) return false;

    if (this.formData.service === 'Others') {
      return this.formData.otherService.trim().length > 0;
    }

    return true;
  }

  // Validate email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit(): void {
    // Mark all fields as touched for validation display
    Object.keys(this.fieldTouched).forEach(key => {
      this.fieldTouched[key as keyof typeof this.fieldTouched] = true;
    });

    // Check if form is valid
    if (!this.isFormValid()) {
      this.submitError = 'Please fill in all required fields correctly.';
      return;
    }

    this.isSubmitting = true;

    // Prepare service field
    const serviceSelected = this.formData.service === 'Others' ? this.formData.otherService : this.formData.service;

    // Prepare email template parameters (matching your dashboard structure)
    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      service: serviceSelected,
      message: `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nService: ${serviceSelected}\nMessage: ${this.formData.message}`
    };

    // Send email using EmailJS
    emailjs.send(
      this.serviceId,
      this.templateId,
      templateParams,
      this.publicKey
    ).then(
      (response: EmailJSResponseStatus) => {
        this.submitError = '';
        this.submitMessage = '✓ Message Sent!';
        this.submitSuccess = true;
        this.isSubmitting = false;
        
        // Reset form after 3 seconds
        setTimeout(() => {
          this.submitMessage = 'Send Message →';
          this.submitSuccess = false;
          this.formData = { name: '', email: '', service: '', otherService: '', message: '' };
          this.fieldTouched = { name: false, email: false, service: false, otherService: false, message: false };
        }, 3000);
      },
      (error) => {
        this.submitError = 'Failed to send message. Please try again.';
        this.isSubmitting = false;
        console.error('EmailJS Error:', error);
      }
    );
  }

  onServiceChange(): void {
    this.markFieldTouched('service');
  }

  onOtherServiceInput(): void {
    this.markFieldTouched('otherService');
  }

  onNameBlur(): void {
    this.markFieldTouched('name');
  }

  onEmailBlur(): void {
    this.markFieldTouched('email');
  }

  onMessageBlur(): void {
    this.markFieldTouched('message');
  }
}
