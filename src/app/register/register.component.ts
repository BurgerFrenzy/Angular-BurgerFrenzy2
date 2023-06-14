import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) { }
  fg: FormGroup;

  ngOnInit(): void {
    this.fg = this.fb.group({
      name: ['', Validators.name],
      surname: ['', Validators.name],
      email: ['', Validators.email],
      password: ['', Validators.required],
      password1: ['', Validators.required]
    })
  }

  submit() {
    console.log(this.fg.value.name);
    console.log(this.fg.value.surname);
    console.log(this.fg.value.email);
    console.log(this.fg.value.password);
    console.log(this.fg.value.password1);
    alert("Bienvenido " + this.fg.value.email);
  }
  contrasena: boolean = false;
  contrasena1: boolean = false;

  MostrarContrasenaRegister() {
    this.contrasena = !this.contrasena;
    this.contrasena1 = !this.contrasena1;
  }
}

