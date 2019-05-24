import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InfoPage } from '../info/info.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private modal: ModalController){}

  async info(){
    const modalInfo = await this.modal.create({
      component: InfoPage,
      componentProps: { value : 123 }
    });
    await modalInfo.present();
  }

  ir(id){
    switch (id){
      case 1:
        this.router.navigateByUrl('/nosotros');
        break;
      case 2:
        this.router.navigateByUrl('/hacemos');
        break;
      case 3:
        this.router.navigateByUrl('/porcionario');
        break;
      case 4:
        this.router.navigateByUrl('/moderacion');
        break;
      case 5:
        this.router.navigateByUrl('/super');
        break;
      case 6:
        this.router.navigateByUrl('/menus');
    }
  }

}
