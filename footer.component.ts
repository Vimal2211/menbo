import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: '🔗', name: 'LinkedIn', href: 'https://www.linkedin.com/in/menbo-technologies-6756b671/?originalSubdomain=in' },
    { icon: '𝕏', name: 'Twitter', href: 'https://www.twitter.com' },
    { icon: '📷', name: 'Instagram', href: 'https://www.instagram.com' },
    { icon: 'f', name: 'Facebook', href: 'https://www.facebook.com' }
  ];

  services = [
    { name: 'Web Development', modal: 'webDev' },
    { name: 'Mobile App Dev', modal: 'mobile' },
    { name: 'UI/UX Design', modal: 'uiux' },
    { name: 'Digital Marketing', modal: 'dm' },
    { name: 'SEO', modal: 'seo' },
    { name: 'IT Consulting', modal: 'it' }
  ];

  constructor(private modalService: ModalService) {}

  companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Tech Stack', href: '#technologies' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  contactLinks = [
    { type: 'email', value: 'support@menbotechnologies.in', href: 'mailto:support@menbotechnologies.in' },
    { type: 'phone', value: '+91 98418 13134', href: 'tel:+919841813134' },
    { type: 'phone', value: '+91 96989 82626', href: 'tel:+919698982626' },
    { type: 'location', value: 'Pallavaram, Chennai', href: '#contact' }
  ];

  // Open service modal
  openServiceModal(modalName: string): void {
    this.modalService.openModal(modalName);
  }

  // Open policy modal
  openPolicy(policyType: 'privacy' | 'terms'): void {
    this.modalService.openModal(policyType);
  }
}
