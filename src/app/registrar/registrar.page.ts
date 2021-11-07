import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})

export class RegistrarPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  users = [];

  constructor(private formBuilder: FormBuilder, private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      correo: ['', Validators.compose([Validators.maxLength(70),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(duocuc|profesor.duoc)\.cl$'),
        Validators.required])],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      tiporegistro: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('¡Datos inválidos o no ingresados!');
      return false;
    } else {
      console.log(this.ionicForm.value);
      console.log(typeof this.ionicForm.value);

      this.users.push(this.ionicForm.value);
      this.presentLoading();
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Creando cuenta...',
      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('¡Creación exitosa!');
    if ( data == null ) {
      const navigationExtras: NavigationExtras = {
        state: {
          users: this.users
        }
      };
      this.router.navigate(['login'], navigationExtras);
    }
  }
}
