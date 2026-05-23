import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isHamburgerOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.setupScrollListener();
  }

  setupScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
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
