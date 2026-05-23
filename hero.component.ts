import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  stats = [
    { num: '25+', label: 'Projects Done', id: 'gc1' },
    { num: '98%', label: 'Satisfaction', id: 'gc2' },
    { num: '10+', label: 'Team', id: 'gc3' },
    { num: '24h', label: 'Response Time', id: 'gc4' }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.animateCounters(), 500);
  }

  animateCounters(): void {
    document.querySelectorAll('.gc-num').forEach(el => {
      const text = el.textContent || '';
      const numStr = text.replace(/[^0-9]/g, '');
      const target = parseFloat(numStr);
      
      if (isNaN(target)) return;
      
      let start = 0;
      const originalText = text;
      
      const step = () => {
        start += target / 60;
        if (start < target) {
          const formatted = text.replace(/\d+/, Math.floor(start).toString());
          el.textContent = formatted;
          requestAnimationFrame(step);
        } else {
          el.textContent = originalText;
        }
      };
      
      requestAnimationFrame(step);
    });
  }
}
