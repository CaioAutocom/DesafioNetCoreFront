import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  // username: string = '';
  // password: string = '';

  constructor(private authService: AuthService){}

  protected formBuilderService = inject(FormBuilder);
  protected form = this.formBuilderService.group({
    username: '',
    password: ['']
  })
  onSubmit()
  {
    const username = this.form.value.username;
    const password = this.form.value.password;

    this.authService.login(username, password).subscribe(
      response => 
      {
        this.authService.setToken(response.token);
        this.authService.setRefreshToken(response.refreshToken);
        console.log(response.token);
      },
      error => { 
        // tratar'
      }
    )
  }

  protected printForm()
  {
    console.log(this.form);
  }
}

