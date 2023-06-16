import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarNavbar: boolean = false;
  mostrarFooter: boolean = false;
  enlace(){
    window.location.href='history'
  }
}
