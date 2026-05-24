import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isHamburgerOpen = false;
  activeSection = 'home';

  private scrollHandler = () => {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  };

  constructor() { }

  ngOnInit(): void {
    this.updateActiveSection();
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  updateActiveSection(): void {
    const sections = ['home', 'services', 'about', 'works', 'technologies', 'team', 'contact'];
    const viewportCenter = window.innerHeight * 0.35;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;

      if (top <= viewportCenter && bottom >= viewportCenter) {
        this.activeSection = section;
        return;
      }
    }

    if (window.scrollY < 80) {
      this.activeSection = 'home';
    }
  }

  toggleHamburger(): void {
    this.isHamburgerOpen = !this.isHamburgerOpen;
    if (this.isHamburgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isHamburgerOpen = false;
    document.body.style.overflow = '';
  }
}
