import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./admin-login.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  doLogin() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (!email || !password) {
      alert('Por favor, preencha usuário e senha.');
      return;
    }
    localStorage.setItem('token', 'logado');
    this.router.navigate(['/admin-panel']);
  }
}
