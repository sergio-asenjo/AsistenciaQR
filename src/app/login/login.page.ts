import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users = [];
  usuario: string;
  contrasena: string;
  user: any;
  tipo: string;

  constructor(private route: ActivatedRoute, private router: Router, private loadingController: LoadingController) {
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (this.router.getCurrentNavigation().extras.state) {
        this.users.push(this.router.getCurrentNavigation().extras.state.users[0]);
      }
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // console.log(this.users[0].correo);
    this.users.forEach(element => {
      console.log(element.correo);
    });
  }

  login() {
    if (this.usuario && this.contrasena) {
      // console.log(this.usuario);
      // console.log(this.contrasena);
      this.users.forEach(element => {
        if(Object.values(element).includes(this.usuario)) {
          if(element.contrasena === this.contrasena) {
            console.log('usuario correcto!');
            this.user = element;
            this.tipo = element.tiporegistro;
            console.log(this.user);
            this.ingresando();
          } else {
            this.noData();
          }
          console.log(element);
        }
      });
    }
    else {
      console.log('se requieren datos');
      this.noData();
    }
  }

  async noData() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '¡Ingrese datos válidos!',
      duration: 1000,
      spinner: null
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async ingresando() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Ingresando...',
      duration: 2000,
      spinner: 'crescent'
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    if ( data == null ) {
      const navigationExtras: NavigationExtras = {
        state: {
          user: this.user
        }
      };
      if(this.tipo === 'alumno') {
        this.router.navigate(['alumno'], navigationExtras);
      } else {
        this.router.navigate(['profesor'], navigationExtras);
      }
    }
  }

  irRecuperar() {
    const navigationExtras: NavigationExtras = {
      state: {
        users: this.users
      }
    };
    this.router.navigate(['recuperar'], navigationExtras);
  }
}
