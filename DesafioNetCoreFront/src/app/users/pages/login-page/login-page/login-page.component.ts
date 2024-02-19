import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService){}

  onSubmit()
  {
    this.authService.login(this.username, this.password).subscribe(
      response => 
      {
        this.authService.setToken(response.token);
        this.authService.setRefreshToken(response.refreshToken);
      },
      error => { 
        // tratar'
      }
    )
  }
}

