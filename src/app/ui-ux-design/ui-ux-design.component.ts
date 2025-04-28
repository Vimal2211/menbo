import { Component, HostListener, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

interface PortfolioItem {
  id: number;
  category: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-ui-ux-design',
  standalone: true,
  imports: [CarouselModule,CommonModule,HttpClientModule],
  templateUrl: './ui-ux-design.component.html',
  styleUrl: './ui-ux-design.component.css'
})
export class UiUxDesignComponent implements OnInit {
  testimonialCarouselOptions: OwlOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 7000,
    dots: true,
    nav: false,
    items: 1,
    smartSpeed: 800
  };

  portfolioItems: PortfolioItem[] = [
    { id: 1, category: 'web', image: 'web1.jpg', alt: 'Portfolio 1' },
    { id: 2, category: 'mobile', image: 'mob.jpg', alt: 'Portfolio 2' },
    { id: 3, category: 'ecommerce', image: 'ecomerce.jpg', alt: 'Portfolio 3' },
    // Add more items as needed
  ];

  filteredPortfolioItems: PortfolioItem[] = [];
  isLargeScreen: boolean = false;
  activeCategory: string = 'all'; // Tracks the currently active category
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateScreenSize();
    this.filteredPortfolioItems = this.portfolioItems;
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

  open(){
    this.router.navigate(['/dashboard'], { fragment: 'contact' });
  }

  // filterPortfolio(category: string) {
  //   if (category === 'all') {
  //     this.filteredPortfolioItems = this.portfolioItems;
  //   } else {
  //     this.filteredPortfolioItems = this.portfolioItems.filter(item => item.category === category);
  //   }
  // }

  filterPortfolio(category: string): void {
    this.activeCategory = category; // Set the active category
    if (category === 'all') {
      this.filteredPortfolioItems = this.portfolioItems;
    } else {
      this.filteredPortfolioItems = this.portfolioItems.filter(
        (item) => item.category === category
      );
    }
  }

}
