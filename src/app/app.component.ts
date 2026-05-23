import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menbotech';

  ngOnInit(): void {
    this.setupScrollReveal();
  }

  setupScrollReveal(): void {
    // Setup Intersection Observer for scroll reveal animations
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    // Observe all reveal elements after a small delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    }, 500);
  }
}

