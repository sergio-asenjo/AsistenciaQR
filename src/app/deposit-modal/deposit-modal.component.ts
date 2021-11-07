import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent  {

  constructor(private modalCtrl:ModalController) { }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
