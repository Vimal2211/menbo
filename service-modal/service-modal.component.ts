import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.css']
})
export class ServiceModalComponent implements OnInit {
  activeModal: string | null = null;
  
  // Web Development content
  webDevIntro = 'At Menbo Technologies, we specialize in creating dynamic and responsive websites tailored to your business needs. We leverage the latest technologies to deliver websites that look stunning and perform seamlessly across all devices — whether you need a landing page, a corporate site, or a complex web application.';
  
  webDevFeatures = [
    { icon: '🛠️', title: 'Custom Web Development', desc: 'Tailor-made websites built to your exact requirements — functional, scalable, and future-proof.' },
    { icon: '📱', title: 'Responsive Design', desc: 'Pixel-perfect layouts that deliver an optimal experience on every screen size and device.' },
    { icon: '🔒', title: 'Security & Maintenance', desc: 'Robust security measures and ongoing maintenance to keep your site safe and always up to date.' }
  ];

  webDevProcess = [
    { num: 1, name: 'Discovery', desc: 'Understanding your business goals, audience, and project requirements to lay a solid strategic foundation.' },
    { num: 2, name: 'Design', desc: 'Crafting intuitive and visually compelling designs that align with your brand identity and user expectations.' },
    { num: 3, name: 'Development', desc: 'Building robust, scalable web applications using modern frameworks — Angular, React, Node.js, and more.' },
    { num: 4, name: 'Deployment', desc: 'Smooth launch to a live environment with performance tuning, SEO setup, and post-launch monitoring.' }
  ];

  webDevTechs = [
    '🟠 HTML5', '🔵 CSS3', '🟡 JavaScript', '🔴 Angular', '🩵 React', '🟢 Node.js',
    '🅱️ Bootstrap', '💅 Sass', '🗄️ Databases', '🔥 Firebase', '🖼️ Figma', '☁️ Cloud'
  ];

  webDevPortfolio = [
    { title: 'Project One', sub: 'Interactive Web Application · Angular, D3.js, Node.js', img: 'https://www.menbotechnologies.in/assets/pictures/portfolio_3.jpg' },
    { title: 'Project Two', sub: 'Custom CMS · Angular, Node.js, SQL', img: 'https://www.menbotechnologies.in/assets/pictures/portfolio2.jpg' },
    { title: 'Project Three', sub: 'E-commerce Platform · Angular, Node.js, MongoDB', img: 'https://www.menbotechnologies.in/assets/pictures/portfolio1.jpg' }
  ];

  webDevTestimonials = [
    {
      quote: 'Menbo Technologies transformed our outdated website into a modern, responsive platform that significantly increased our user engagement and sales.',
      author: 'Jane Doe',
      role: 'CEO, TechCorp',
      avatar: 'https://www.menbotechnologies.in/assets/profile/Designer_1.jpeg'
    },
    {
      quote: 'The team delivered a custom web application that perfectly fits our business needs. Their attention to detail and dedication to quality are unmatched.',
      author: 'John Smith',
      role: 'Marketing Manager, MarketGuru',
      avatar: 'https://www.menbotechnologies.in/assets/profile/Designer_2.jpeg'
    }
  ];

  // Privacy Policy content
  privacyIntro = 'Your privacy is important to us. This privacy policy explains how Menbo Technologies collects, uses, protects, and manages your information when you interact with our website and services.';
  
  privacySections = [
    {
      title: 'Information We Collect',
      items: [
        'Personal Information: Name, email, phone number, company details, and other information you provide.',
        'Usage Data: Information about how you interact with our website, including pages visited, time spent, and browsing patterns.',
        'Cookies & Tracking: Data stored on your device to enhance user experience and analyze site performance.',
        'Communication Data: Information shared when you contact us via email, phone, or contact forms.'
      ]
    },
    {
      title: 'How We Use Your Information',
      items: [
        'To provide, maintain, and improve our services and website.',
        'To respond to your inquiries and provide customer support.',
        'To send updates, newsletters, and promotional materials (with your consent).',
        'To analyze usage patterns and enhance user experience.',
        'To comply with legal obligations and protect our rights.'
      ]
    },
    {
      title: 'Data Security',
      items: [
        'We implement industry-standard security measures to protect your personal information.',
        'Data is transmitted using SSL encryption technology.',
        'Access to personal information is restricted to authorized personnel only.',
        'We maintain physical, electronic, and procedural safeguards to protect your data.'
      ]
    },
    {
      title: 'Your Rights',
      items: [
        'You have the right to access your personal information.',
        'You can request correction or deletion of your data.',
        'You can opt out of marketing communications at any time.',
        'You can withdraw consent for data processing where applicable.'
      ]
    },
    {
      title: 'Changes to This Policy',
      items: [
        'We may update this Privacy Policy periodically to reflect changes in our practices.',
        'We will notify you of significant changes by posting the updated policy on our website.',
        'Your continued use of our services after changes constitutes your acceptance of the new policy.'
      ]
    }
  ];

  // Terms & Conditions content
  termsIntro = 'Welcome to Menbo Technologies. These terms outline the rules and regulations for the use of our website and services. By accessing and using our site and services, you accept these terms in full. If you do not agree with any part of these terms, you must not use our services.';
  
  termsSections = [
    {
      title: 'Acceptance of Terms',
      items: [
        'By accessing this website and using our services, you accept these terms in their entirety.',
        'If you disagree with any part of these terms, you must immediately cease using our services.',
        'We reserve the right to modify these terms at any time without prior notice.'
      ]
    },
    {
      title: 'Services Provided',
      items: [
        'Menbo Technologies provides a variety of software development services including web development, mobile app development, UI/UX design, digital marketing, SEO, and IT consulting.',
        'Services are provided on an as-is basis without any warranties.',
        'We reserve the right to refuse service to anyone for any reason.'
      ]
    },
    {
      title: 'User Responsibilities',
      items: [
        'Users are responsible for maintaining the confidentiality of their account credentials.',
        'You agree to use our services only for lawful purposes and in a way that does not violate any applicable laws.',
        'You agree not to engage in any activity that could damage, disable, or impair our services.',
        'You are responsible for all activities that occur under your account.'
      ]
    },
    {
      title: 'Intellectual Property Rights',
      items: [
        'All content on our website, including text, graphics, logos, and software, is the property of Menbo Technologies.',
        'You may not reproduce, duplicate, copy, or otherwise exploit any content without written permission.',
        'Client deliverables are provided under the terms specified in individual service agreements.'
      ]
    },
    {
      title: 'Limitation of Liability',
      items: [
        'Menbo Technologies is not liable for any indirect, incidental, special, or consequential damages.',
        'Our total liability for any claim shall not exceed the amount paid by you for our services.',
        'We are not responsible for third-party content, links, or services.',
        'We do not warrant that our services will be error-free or uninterrupted.'
      ]
    },
    {
      title: 'Modifications to Terms',
      items: [
        'We may update these terms periodically to reflect changes in our practices and legal requirements.',
        'Continued use of our services after modifications constitutes acceptance of the updated terms.',
        'It is your responsibility to review these terms regularly for any changes.'
      ]
    },
    {
      title: 'Termination',
      items: [
        'We reserve the right to terminate or suspend your access to our services at any time.',
        'Termination may occur without notice if you violate these terms or applicable laws.',
        'Upon termination, your right to use our services will immediately cease.'
      ]
    },
    {
      title: 'Governing Law',
      items: [
        'These terms are governed by and construed in accordance with the laws of India.',
        'Any legal action or proceeding shall be exclusively resolved in the courts located in Chennai, Tamil Nadu.'
      ]
    }
  ];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.getActiveModal().subscribe(modal => {
      this.activeModal = modal;
    });
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  scrollToContact(): void {
    this.closeModal();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}
