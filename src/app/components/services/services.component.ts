import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

export interface Service {
  id: string;
  num: string;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 'webDev',
      num: '01',
      icon: 'web',
      title: 'Web Development',
      description: 'Creating stunning and responsive websites using modern technologies — from landing pages to complex web applications.'
    },
    {
      id: 'mobile',
      num: '02',
      icon: 'mobile',
      title: 'Mobile App Development',
      description: 'Building user-friendly mobile applications for iOS and Android — native performance with beautiful experiences.'
    },
    {
      id: 'uiux',
      num: '03',
      icon: 'design',
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging user experiences with Figma — designs that convert visitors into customers.'
    },
    {
      id: 'dm',
      num: '04',
      icon: 'marketing',
      title: 'Digital Marketing',
      description: 'Drive growth with expert strategies in social media, PPC, and content marketing — data-driven for maximum ROI.'
    },
    {
      id: 'seo',
      num: '05',
      icon: 'seo',
      title: 'SEO Optimization',
      description: 'Boost your website\'s visibility and rankings with expert SEO strategies tailored to your business goals.'
    },
    {
      id: 'it',
      num: '06',
      icon: 'consulting',
      title: 'IT Consulting',
      description: 'Get expert guidance to streamline your IT infrastructure and digital operations for smarter business growth.'
    }
  ];

  constructor(private modalService: ModalService) { }

  openServiceModal(serviceId: string): void {
    const modalMap: { [key: string]: string } = {
      'webDev': 'webDev',
      'mobile': 'mobile',
      'uiux': 'uiux',
      'dm': 'dm',
      'seo': 'seo',
      'it': 'it'
    };
    this.modalService.openModal(modalMap[serviceId]);
  }
}
