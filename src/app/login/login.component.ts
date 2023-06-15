import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private auth: AuthService, private r: Router) { }

  fg: FormGroup;

  ngOnInit(): void {
    this.fg = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  /*
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
  */

  submit() {
    if (this.auth.login(this.fg.value.email, this.fg.value.password)) {
      alert("login ok")
      //this.r.navigate(['private']);
      window.location.href = 'private';
    } else {
      alert("Error en el login");
    }
  }
  mostrarContrasena: boolean = false;
  MostrarContrasenaLogin() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}
