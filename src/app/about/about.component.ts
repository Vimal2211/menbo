import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    AOS.init({
      duration: 800, // animation duration in ms
      //once: true     // whether animation should happen only once - while scrolling down
    });
    window.scrollTo(0, 0);
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      AOS.refresh(); // Refresh AOS after navigation to re-apply animations
    });
  }

  open() {
    this.router.navigate(['/dashboard'], { fragment: 'contact' });
  }

}
