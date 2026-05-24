import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  template: `
    <div class="cursor" #cursor></div>
    <div class="cursor-ring" #cursorRing></div>
  `,
  styles: [`
    .cursor {
      position: fixed;
      width: 10px;
      height: 10px;
      background: var(--accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
    }
    
    .cursor-ring {
      position: fixed;
      width: 36px;
      height: 36px;
      border: 1.5px solid var(--accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: all 0.18s ease;
      opacity: 0.6;
    }
  `]
})
export class CursorComponent implements OnInit {

  ngOnInit(): void {
    this.initCursor();
  }

  initCursor(): void {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorRing = document.querySelector('.cursor-ring') as HTMLElement;
    
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
      
      setTimeout(() => {
        if (cursorRing) {
          cursorRing.style.left = e.clientX + 'px';
          cursorRing.style.top = e.clientY + 'px';
        }
      }, 60);
    });
  }
}
