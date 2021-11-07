import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  users: [];
  userRecuperado: any;
  correo: string;
  contrasena: string;

  constructor(private route: ActivatedRoute, private router: Router, private loadingController: LoadingController) {
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      // if (this.router.getCurrentNavigation().extras.state) {
      //   this.users = this.router.getCurrentNavigation().extras.state.users;
      //   for (const user in this.router.getCurrentNavigation().extras.state.users) {
      //     this.users.push(user);
      //   }
      // }
    });
  }

  ngOnInit() {
  }

  recuperar() {
    // this.users.forEach(element => {
    //   if (Object.values(element).includes(this.correo)) {
    //     console.log(element);
    //   }
    // console.log(this.users);
    // console.log(typeof this.users);
    // for (const user of this.users) {
    //   if (Object.values(user).includes(this.correo)) {
    //     console.log(user.contrasena);
    //     console.log(user.correo);
    //   }
    // }
  }

  ionViewDidEnter() {
    console.log(this.users);
  }
}
