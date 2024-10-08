import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: String;
  password!: String;
  /* message!: String; */

  constructor(private router: Router, private toaster: ToastController) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  validateLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      let extras: NavigationExtras = {
        state: { user: this.username },
      };
      this.router.navigate(['/usuario'], extras);
    } else {
      /* this.message = 'Login con error'; */
      this.toastErrorMessage('Usuario y/o Password no validos');
    }
  }

  async toastErrorMessage(message: string) {
    const toast = await this.toaster.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger',
    });
    toast.present(); 
  }

  ngOnInit() {}
}
