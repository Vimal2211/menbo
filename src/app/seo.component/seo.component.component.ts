import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-seo.component',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './seo.component.component.html',
  styleUrl: './seo.component.component.css'
})
export class SeoComponentComponent {
  isLargeScreen: boolean = false;
  constructor(private router: Router) { }

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

  open() {
    this.router.navigate(['/dashboard'], { fragment: 'contact' });
  }
}

