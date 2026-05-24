import { Component } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent {
  items = [
    { text: 'Web Development', bold: true },
    { text: 'Mobile App Development', bold: false },
    { text: 'UI/UX Design', bold: true },
    { text: 'Digital Marketing', bold: false },
    { text: 'SEO Optimization', bold: true },
    { text: 'IT Consulting', bold: false },
    { text: 'React · Angular · Node.js', bold: true },
    { text: 'iOS & Android', bold: false },
    { text: 'Firebase · Figma', bold: true },
  ];
}
