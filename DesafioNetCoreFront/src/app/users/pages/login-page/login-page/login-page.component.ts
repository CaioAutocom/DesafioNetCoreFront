import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Credentials } from '../../../../interfaces/credentials.model';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {

  constructor(private authService: AuthService){}

  protected formBuilderService = inject(FormBuilder);
  protected router = inject(Router);

  protected form = this.formBuilderService.group({
    username: [''],
    password: ['']
  })
  onSubmit()
  {
    const credentials: Credentials = 
    {
      Email: this.form.value.username || 'ff',
      Password: this.form.value.password || 'ff'
    };
    
    this.authService.login(credentials).subscribe(
      response => 
      {
        this.authService.setToken(response.accessToken);
        this.authService.setRefreshToken(response.refreshToken);
        console.log(response.accessToken);
        
        
        this.router.navigate(['/person']); 
      },
      (error) => {
        console.error('Erro de login', error);
      }
    )
  }

  protected printForm()
  {
    console.log(this.form);
  }
}

