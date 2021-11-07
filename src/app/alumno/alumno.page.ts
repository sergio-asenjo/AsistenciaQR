import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

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
        this.tipo = this.router.getCurrentNavigation().extras.state.user.tiporegistro;
      }
      console.log(this.nombre);
      console.log(this.tipo);
    });
   }

  ngOnInit() {
  }

  capitalize(email: string){
    return email[0].toUpperCase() + email.slice(1).toLowerCase();
  }
}
