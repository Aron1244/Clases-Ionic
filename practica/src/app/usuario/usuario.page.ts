import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  nombre!: String;
  constructor() { 
    this.nombre = 'Benjamín';
  }

  ngOnInit() {
  }

}
