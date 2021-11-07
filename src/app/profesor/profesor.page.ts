import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {DepositModalComponent} from './../deposit-modal/deposit-modal.component';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  currentUser: any;
  nombre: string;
  tipo: string;

  constructor(private modalCtrl: ModalController, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentUser = this.router.getCurrentNavigation().extras.state.user;
        this.nombre = this.router.getCurrentNavigation().extras.state.user.correo.split('@')[0];
        this.nombre = this.capitalize(this.nombre);
        this.tipo = this.router.getCurrentNavigation().extras.state.user.tiporegistro;
      }
      console.log(this.nombre);
      console.log(this.tipo);
    });
  }

  ngOnInit() {
  }

   async openModal(){
    const modal = await this.modalCtrl.create({
      component: DepositModalComponent
    });
    await modal.present();
  }

  capitalize(email: string){
    return email[0].toUpperCase() + email.slice(1).toLowerCase();
  }

}
