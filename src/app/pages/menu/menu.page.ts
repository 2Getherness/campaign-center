import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private toolBarTextColor: string
  private showSlideView: boolean
  private toolBarBackgroundColor: string
    
    components: ComponentInterface[] = [
      {
        icon: 'settings',
        name: 'settings',
        redirectTo: '/settings'
      },
      {
        icon: 'information-circle',
        name: 'home',
        redirectTo: '/home'
      },
    ]
    constructor() {
   }

  ngOnInit() {
  }

}

interface ComponentInterface {
  icon: string;
  name: string;
  redirectTo: string
}