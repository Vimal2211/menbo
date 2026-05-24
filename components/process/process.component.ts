import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
  processes = [
    { num: '01', title: 'Discovery & Strategy', description: 'We learn your goals, audience, and competitive landscape to define a clear project brief and technology roadmap.', icon: 'discovery' },
    { num: '02', title: 'Design & Prototype', description: 'High-fidelity Figma wireframes and interactive prototypes that validate ideas before any code is written.', icon: 'design' },
    { num: '03', title: 'Agile Development', description: 'Sprint-based development with weekly demos, code reviews, and continuous integration — you\'re always in the loop.', icon: 'development' },
    { num: '04', title: 'QA & Testing', description: 'Thorough testing across all devices, browsers, and edge cases — we ship only when it\'s production-ready.', icon: 'testing' },
    { num: '05', title: 'Launch & Growth', description: 'Smooth deployment, analytics setup, SEO foundation, and ongoing support to iterate as your business grows.', icon: 'launch' }
  ];
}
