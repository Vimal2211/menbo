import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  isLargeScreen: boolean = false;
  constructor(private router : Router){}
  open(){
    // this.router.navigate(['/dashboard']);
    this.router.navigate(['/dashboard'], { fragment: 'contact' });
  }

  ngOnInit() {
    this.updateScreenSize();
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateScreenSize(); // Update on resize
  }

  updateScreenSize(): void {
    this.isLargeScreen = window.innerWidth >= 1024; // Adjust the breakpoint as needed
  }
  
}
