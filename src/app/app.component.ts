import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent,HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Kanish IT Solutions';
  // selectedColor: string = 'home'

  // constructor(private router : Router){}
  // selectLink = (link: any) => {
  //   this.selectedColor = link;
  // }

  // showbelowbtn: boolean = false;

  // @HostListener('window:scroll', ['$event'])

  // ngOnit() {
  //   AOS.init({disable: 'mobile'});//AOS - 2
  //   AOS.refresh();
  //   if (window.pageYOffset == 0) {
  //     this.showbelowbtn = false
  //   } else {
  //     this.showbelowbtn = true
  //   }
  // }

  // openMob=()=>{
  //   this.router.navigateByUrl('/mobile');
  // }
}
