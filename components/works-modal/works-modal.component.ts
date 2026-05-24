import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { WorkItem } from '../works/works.component';
import { WORKS_DATA } from '../works/works-data';

@Component({
  selector: 'app-works-modal',
  templateUrl: './works-modal.component.html',
  styleUrls: ['./works-modal.component.css']
})
export class WorksModalComponent implements OnInit, OnDestroy {
  activeModal: string | null = null;
  selectedWork: WorkItem | null = null;
  private subscription?: Subscription;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.subscription = this.modalService.getActiveModal().subscribe(modal => {
      this.activeModal = modal;

      if (!modal) {
        this.selectedWork = null;
        return;
      }

      this.selectedWork = WORKS_DATA.find((item: WorkItem) => item.id === modal) || null;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
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
