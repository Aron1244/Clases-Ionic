import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username!:  String;
  password!:  String;
  message!:   String;

  constructor(private router: Router) { 

  }
  
  navigateToHome(){
    this.router.navigate(['/home'])
  }

  validateLogin(){
    if (this.username === 'admin'
      && this.password === '1234'
    ){
      let extras: NavigationExtras = {
        state: {user: this.username}
      }
      this.router.navigate(['/usuario'],extras);
    }else{
      this.message = 'Login con error'
    }
  }

  ngOnInit() {
  }

}
