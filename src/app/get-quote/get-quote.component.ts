import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-get-quote',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './get-quote.component.html',
  styleUrl: './get-quote.component.css'
})
export class GetQuoteComponent {

  quoteForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router
  ) {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]],
      insuranceType: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  onSubmit() {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAsTouched();
      return
    }
    if (this.quoteForm.valid) {
      console.log('Quote Request Submitted', this.quoteForm.value);
      // Implement your submission logic here (e.g., send to backend)
      alert('Your quote request has been submitted successfully!');
      this.quoteForm.reset();
    } 
    // else {
    //   alert('Please fill out the form correctly before submitting.');
    // }
  }

}
