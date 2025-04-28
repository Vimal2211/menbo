import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-e-commerce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.css'
})
export class ECommerceComponent {
// Array to track the open state of FAQs
faqStates: boolean[] = [false, false]; // Initialize with 'false' for each FAQ

toggleFAQ(index: number): void {
  this.faqStates[index] = !this.faqStates[index]; // Toggle the state
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
