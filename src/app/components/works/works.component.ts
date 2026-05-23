import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { WORKS_DATA } from './works-data';

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  tags: string[];
  accent: string;
  image?: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  showAllWorks = false;
  works: WorkItem[] = WORKS_DATA;

  constructor(private modalService: ModalService) { }

  get displayedWorks(): WorkItem[] {
    return this.showAllWorks ? this.works : this.works.slice(0, 3);
  }

  toggleExploreMore(): void {
    this.showAllWorks = !this.showAllWorks;
  }

  openWork(workId: string): void {
    this.modalService.openModal(workId);
  }
}
