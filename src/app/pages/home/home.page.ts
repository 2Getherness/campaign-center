import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
private toolBarTextColor: string
private showSlideView: boolean
private toolBarBackgroundColor: string
private color: string
  
  components: ComponentInterface[] = [
    {
      icon: 'settings',
      name: 'settings',
      redirectTo: '/settings',
      companyName: 'Telia',
      color: 'rgb(137, 13, 161)',
      weburl: 'https://www.telia.se/privat?gclid=EAIaIQobChMIxp6swPXs4gIVQhUYCh0xCQrBEAAYASAAEgIB2_D_BwE&gclsrc=aw.ds',
      // moredetail:[{
      //   companyName: 'Telia',
      //   weburl: 'https://www.telia.se/privat?gclid=EAIaIQobChMIxp6swPXs4gIVQhUYCh0xCQrBEAAYASAAEgIB2_D_BwE&gclsrc=aw.ds',
      // }]
    },
    {
      icon: 'information-circle',
      name: 'home',
      redirectTo: '/home',
      companyName: 'helebob',
      color: 'red',
      weburl: 'https://www.macken.xyz/2019/06/telia-och-halebop-smyger-ut-e-sim/',
      

      // moredetail: [{
      //   companyName: 'helebob',
      //   weburl: 'https://www.macken.xyz/2019/06/telia-och-halebop-smyger-ut-e-sim/',
      // },
      // ]
    },
    {
      icon: 'information-circle',
      name: '',
      redirectTo: '/home',
      companyName: 'Building mobile britain',
      color: 'red',
      weburl: 'http://www.buildingmobilebritain.org.uk/about/',
      

      // moredetail: [{
      //   companyName: 'helebob',
      //   weburl: 'https://www.macken.xyz/2019/06/telia-och-halebop-smyger-ut-e-sim/',
      // },
      // ]
    },
    
  ]
  constructor(private menu: MenuController) {
    this.toolBarBackgroundColor = 'light';
    this.showSlideView = false
    this.color = this.components[0].color
  }

  menuClicked() {
    console.log('clicked')
    if(this.showSlideView == false) {
      this.showSlideView = true
    } else {
      this.showSlideView = false
    }
  }

}

interface ComponentInterface {
  icon: string;
  name: string;
  redirectTo: string,
  companyName: string,
  color: string,
  weburl: string
  // moredetail: [{
  //   companyName: string,
  //   weburl: string}
  // ]
}