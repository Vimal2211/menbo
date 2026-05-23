import { Component, OnInit } from '@angular/core';
import { TeamService, TeamMember } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  leadMember: TeamMember | undefined;
  otherMembers: TeamMember[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.leadMember = this.teamService.getLead();
    this.otherMembers = this.teamService.getOtherMembers();
    console.log('this.otherMembers: ', this.otherMembers);
  }

  getColorForTheme(theme: string): string {
    const colors: { [key: string]: string } = {
      'tc-orange': '#e8420a',
      'tc-gold': '#f5a623',
      'tc-purple': '#8b5cf6',
      'tc-green': '#10b981',
      'tc-blue': '#5b9bd5'
    };
    return colors[theme] || '#e8420a';
  }

  getBackgroundColorForTheme(theme: string): string {
    return this.getColorForTheme(theme);
  }
}

