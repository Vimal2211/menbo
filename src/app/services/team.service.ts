import { Injectable } from '@angular/core';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  icon: string;
  skills: string[];
  image: string;
  colorTheme: string; // tc-orange, tc-gold, tc-purple, tc-green, tc-blue
  fallbackText: string;
  isLead?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Vimal',
      role: 'Full Stack Developer',
      icon: '⚡',
      description: 'The engine of Menbo Technologies — Vimal architects and builds full-stack solutions from robust backends to pixel-perfect frontends. His expertise spans modern JavaScript frameworks, cloud infrastructure, and scalable database design.',
      skills: ['React', 'Node.js', 'Angular', 'Firebase', 'Databases', 'REST APIs'],
      // image: 'https://www.menbotechnologies.in/assets/profile/Designer_6.jpg',
      image: 'assets/images/Menbo/profile_Images/Vimal.png',
      colorTheme: 'tc-orange',
      fallbackText: 'V',
      isLead: true
    },
    {
      id: 2,
      name: 'Karthik',
      role: 'Mobile App Developer',
      icon: '📱',
      description: 'Crafts seamless iOS & Android experiences with clean architecture and intuitive UX that users love.',
      skills: ['iOS', 'Android', 'Firebase', 'React Native'],
      // image: 'https://www.menbotechnologies.in/assets/profile/Designer_2.jpeg',
      image: 'assets/images/Menbo/profile_Images/Karthik.png',
      colorTheme: 'tc-orange',
      fallbackText: 'K'
    },
    {
      id: 3,
      name: 'Gopi',
      role: 'Digital Marketing',
      icon: '📣',
      description: 'Drives brand growth through data-driven campaigns across social media, PPC, and content channels.',
      skills: ['Social Media', 'PPC', 'Analytics'],
      // image: 'https://www.menbotechnologies.in/assets/profile/Designer_4.jpg',
      image: 'assets/images/Menbo/profile_Images/Gopi.png',
      colorTheme: 'tc-gold',
      fallbackText: 'G'
    },
    {
      id: 4,
      name: 'Sudhan J',
      role: 'UI/UX Designer',
      icon: '🎨',
      description: 'Transforms complex ideas into intuitive, beautiful interfaces that delight users and convert visitors.',
      skills: ['Figma', 'Prototyping', 'Design Systems'],
      // image: 'https://www.menbotechnologies.in/assets/profile/Designer_1.jpeg',
      image: 'assets/images/Menbo/profile_Images/Sudhan.png',
      colorTheme: 'tc-purple',
      fallbackText: 'SJ'
    },
    {
      id: 5,
      name: 'Gokul',
      role: 'SEO Specialist',
      icon: '🔍',
      description: 'Boosts organic visibility with sharp keyword strategies, technical audits, and targeted link building.',
      skills: ['Technical SEO', 'Keywords', 'Link Building'],
      // image: 'https://www.menbotechnologies.in/assets/profile/Designer_3.jpeg',
      image: 'assets/images/Menbo/profile_Images/Gokul.png',
      colorTheme: 'tc-green',
      fallbackText: 'G'
    },
    {
      id: 6,
      name: 'Surendar',
      role: 'IT Consultant',
      icon: '🏗️',
      description: 'Guides businesses with strategic IT advice — from cloud architecture to infrastructure modernization.',
      skills: ['Cloud', 'Architecture', 'Strategy'],
      // image: 'https://www.menbotechnologies.in/assets/profile/Designer_5.jpg',
      image: 'assets/images/Menbo/profile_Images/Surendar.png',
      colorTheme: 'tc-blue',
      fallbackText: 'S'
    },
     {
      id: 7,
      name: 'Oviya',
      role: 'Manual & Automation Tester',
      icon: '🧪',
      description: 'Ensures software quality with meticulous manual testing and robust automation frameworks.',
      skills: ['Manual', 'Automation', 'Selenium', 'TestNG'],
      // image: 'https://www.menbotechnologies.in/assets/profile/Designer_5.jpg',
      image: 'assets/images/Menbo/profile_Images/Oviya.png',
      colorTheme: 'tc-cyan',
      fallbackText: 'O'
    }
  ];

  constructor() { }

  getTeamMembers(): TeamMember[] {
    return this.teamMembers;
  }

  getTeamMemberById(id: number): TeamMember | undefined {
    return this.teamMembers.find(m => m.id === id);
  }

  getLead(): TeamMember | undefined {
    return this.teamMembers.find(m => m.isLead);
  }

  getOtherMembers(): TeamMember[] {
    return this.teamMembers.filter(m => !m.isLead);
  }
}
