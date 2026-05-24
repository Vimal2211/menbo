import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  tech1 = [
    { emoji: '🟠', name: 'HTML5' },
    { emoji: '🔵', name: 'CSS3' },
    { emoji: '🟡', name: 'JavaScript' },
    { emoji: '🔴', name: 'Angular' },
    { emoji: '🩵', name: 'React' },
    { emoji: '🟢', name: 'Node.js' },
    { emoji: '📱', name: 'Android' }
  ];

  tech2 = [
    { emoji: '🍎', name: 'iOS' },
    { emoji: '🗄️', name: 'Databases' },
    { emoji: '🅱️', name: 'Bootstrap' },
    { emoji: '💅', name: 'Sass' },
    { emoji: '🖼️', name: 'Figma' },
    { emoji: '🔥', name: 'Firebase' },
    { emoji: '☁️', name: 'Cloud' }
  ];
}
