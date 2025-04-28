import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  isLoading: boolean = false;

  constructor(private router: Router) {

  }

  openMap(): void {
    const address = encodeURIComponent(
      '#No F3, 1st floor, Pallava Enclave Apartment, Bharathi Nagar Main Road, Pallavaram, Chennai, Tamil Nadu 600043, India'
    );
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(mapUrl, '_blank');
  }

  openMapwithMarker(): void {
    const mapUrl =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.1352295177226!2d80.1538678736714!3d12.96582421500772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f609cb29add%3A0xbc33f21aaa5746b6!2sPallava%20Enclave%20Appartments.!5e1!3m2!1sen!2sin!4v1732377792919!5m2!1sen!2sin';
    window.open(mapUrl, '_blank');
  }
  openMob() {
    this.isLoading = true; // Show loader
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setTimeout(() => {
      this.router.navigate(['/mobile']).then(() => {
        this.isLoading = false; // Hide loader after navigation
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    },1500); // Simulated delay; adjust as needed
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
    },2000); // Simulated delay; adjust as needed
    // this.router.navigate(['/it-consultant']);
  }
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
  openUIUX() {
    this.isLoading = true; // Show loader
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setTimeout(() => {
      this.router.navigate(['/ui-ux-design']).then(() => {
        this.isLoading = false; // Hide loader after navigation
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    },1500); // Simulated delay; adjust as needed
    // this.router.navigate(['/ui-ux-design']);
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
}
