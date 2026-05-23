import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  whyItems = [
    { icon: '🧠', title: 'Proven Expertise', description: 'Industry experts with years of experience in software development.' },
    { icon: '💡', title: 'Innovative Solutions', description: 'Latest technologies to keep you ahead of the competition.' },
    { icon: '🤝', title: 'Customer-Centric', description: 'We work closely with you to align solutions to your vision.' },
    { icon: '⏱️', title: 'On-Time Delivery', description: 'Agile methodologies ensure delivery without compromising quality.' },
    { icon: '✅', title: 'Quality Assurance', description: 'Extensive testing at every stage for reliable, secure software.' },
    { icon: '📈', title: 'Scalable Solutions', description: 'Software designed to grow with your evolving business needs.' }
  ];
}
