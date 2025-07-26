import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-it-consultant',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './it-consultant.component.html',
  styleUrl: './it-consultant.component.css'
})
export class ITConsultantComponent {
  // isLargeScreen: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    AOS.init({
      duration: 800, // animation duration in ms
      //once: true     // whether animation should happen only once - while scrolling down
    });
    window.scrollTo(0, 0);
    // this.updateScreenSize();
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      AOS.refresh(); // Refresh AOS after navigation to re-apply animations
    });
  }

  // @HostListener('window:resize', [])
  // onResize(): void {
  //   this.updateScreenSize(); // Update on resize
  // }

  // updateScreenSize(): void {
  //   this.isLargeScreen = window.innerWidth >= 1024; // Adjust the breakpoint as needed
  // }

  open() {
    this.router.navigate(['/dashboard'], { fragment: 'contact' });
  }
}
