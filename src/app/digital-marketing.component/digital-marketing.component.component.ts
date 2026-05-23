import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-digital-marketing.component',
  standalone: true, 
  imports: [RouterOutlet, CommonModule],
  templateUrl: './digital-marketing.component.component.html',
  styleUrl: './digital-marketing.component.component.css'
})
export class DigitalMarketingComponentComponent {

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
