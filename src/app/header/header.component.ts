import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  selectedColor: string = 'home'
  isOpened: boolean = false;
  selectLink(link: string) {
    this.selectedColor = link;
    this.isOpened = false

  }
  constructor(private router : Router){}
  toggle() {
    this.isOpened = !this.isOpened;
    console.log(' this.isOpened: ', this.isOpened);
  }

  openHome(){
    this.router.navigate(['']);
  }

}
