import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'Kanish IT Solutions';
  selectedColor: string = 'home'
  contactForm: FormGroup;
  serviceId = 'service_s2qc95s'; // Replace with your EmailJS service ID
  templateId = 'template_5pj9trt'; // Replace with your EmailJS template ID
  publicKey = 'Uw-bBU_SizAeWY1JZ'; // Replace with your EmailJS public key

  constructor(private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        reply_to: this.contactForm.value.email,
        message: `Name: ${this.contactForm.value.name}\nEmail: ${this.contactForm.value.email}\nMessage: ${this.contactForm.value.message}`
      };

      emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey)
        .then(
          (response: EmailJSResponseStatus) => {
            this.contactForm.reset();
            this.toast.success('Message Sent Successfully!',);
            // alert('Message Sent Successfully!');
          },
          (error) => {
            console.error('FAILED...', error);
            this.toast.error('Failed to send message. Please try again later.');
            // alert('Failed to send message. Please try again later.');
          }
        );
    }
    else {
      this.contactForm.markAllAsTouched();
      // alert('Please fill out all required fields.');
      this.toast.error('Please fill out all required fields...!!!');
    }
  }

  openMapwithMarker(): void {
    const mapUrl =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.1352295177226!2d80.1538678736714!3d12.96582421500772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f609cb29add%3A0xbc33f21aaa5746b6!2sPallava%20Enclave%20Appartments.!5e1!3m2!1sen!2sin!4v1732377792919!5m2!1sen!2sin';
    window.open(mapUrl, '_blank');
  }
  selectLink = (link: any) => {
    this.selectedColor = link;
  }
  currentYear: number = new Date().getFullYear();
  showbelowbtn: boolean = false;

  @HostListener('window:scroll', ['$event'])

  ngOnit() {
    AOS.init({ disable: 'mobile' });//AOS - 2
    AOS.refresh();
    if (window.pageYOffset == 0) {
      this.showbelowbtn = false
    } else {
      this.showbelowbtn = true
    }
  }

  openMob() {
    this.isLoading = true; // Show loader
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setTimeout(() => {
      this.router.navigate(['/mobile']).then(() => {
        this.isLoading = false; // Hide loader after navigation
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    }, 1000); // Simulated delay; adjust as needed
    // this.router.navigate(['/mobile']);
  }
  openCons() {
    this.isLoading = true; // Show loader
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setTimeout(() => {
      this.router.navigate(['/it-consultant']).then(() => {
        this.isLoading = false; // Hide loader after navigation
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    },1500); // Simulated delay; adjust as needed
    // this.router.navigate(['/it-consultant']);
  }
  isLoading: boolean = false;

  openweb() {
    this.isLoading = true; // Show loader
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setTimeout(() => {
      this.router.navigate(['/web-development']).then(() => {
        this.isLoading = false; // Hide loader after navigation
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    },1500); // Simulated delay; adjust as needed
    // this.router.navigate(['/web-development']);

  }
  openDigitalMarketing() {
    this.isLoading = true; // Show loader
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setTimeout(() => {
      this.router.navigate(['/digital-marketing']).then(() => {
        this.isLoading = false; // Hide loader after navigation
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    },1500); // Simulated delay; adjust as needed
    // this.router.navigate(['/it-consultant']);
  }

  openSEO() {
    this.isLoading = true; // Show loader
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setTimeout(() => {
      this.router.navigate(['/seo']).then(() => {
        this.isLoading = false; // Hide loader after navigation
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    },1500); // Simulated delay; adjust as needed
    // this.router.navigate(['/it-consultant']);
  }

  openabout() {
    this.router.navigate(['/about']);
  }
  openpolicy() {
    this.router.navigate(['/privacy-policy']);
  }
  openterms() {
    this.router.navigate(['/terms-condition']);
  }
  openContact() {
    this.router.navigate(['/contact']);
  }
  openUIUX() {
    this.isLoading = true; // Show loader
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setTimeout(() => {
      this.router.navigate(['/ui-ux-design']).then(() => {
        this.isLoading = false; // Hide loader after navigation
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    }, 1500); // Simulated delay; adjust as needed
    // this.router.navigate(['/ui-ux-design']);
  }
  openinsurance() {
    this.router.navigate(['/insurance']);
  }
  openhealth() {
    this.router.navigate(['/healthCare']);
  }
  openecom() {
    this.router.navigate(['/e-commerce']);
  }
  openelogistic() {
    this.router.navigate(['/logistic']);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
