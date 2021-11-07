import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  currentUser: any;
  nombre: string;
  tipo: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentUser = this.router.getCurrentNavigation().extras.state.user;
        this.nombre = this.router.getCurrentNavigation().extras.state.user.correo.split('@')[0];
        this.nombre = this.capitalize(this.nombre);
        if (this.router.getCurrentNavigation().extras.state.user.tiporegistro === 'alumno') {
          this.tipo = 'Alumno';
        } else {
          this.tipo = 'Profesor';
        }
      }
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log(this.currentUser);
  }

  capitalize(email: string){
    return email[0].toUpperCase() + email.slice(1).toLowerCase();
  }
}
