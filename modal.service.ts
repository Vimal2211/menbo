import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private activeModal = new BehaviorSubject<string | null>(null);
  activeModal$ = this.activeModal.asObservable();

  constructor() { }

  openModal(modalName: string) {
    this.activeModal.next(modalName);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeModal.next(null);
    document.body.style.overflow = '';
  }

  closeAllModals() {
    this.activeModal.next(null);
    document.body.style.overflow = '';
  }

  getActiveModal() {
    return this.activeModal.asObservable();
  }
}
