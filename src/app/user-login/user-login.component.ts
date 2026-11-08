import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService, UserRole } from '../services/auth/auth-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-user-login.component',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    TitleCasePipe,
    MatButton,
    MatIcon
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})

export class UserLoginComponent {
  authService = inject(AuthService)

  appRoles = ['SALES', 'REVIEWER', 'ADMIN'];

  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    username: ['abc', Validators.required],
    role: new FormControl<UserRole>('SALES', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const role = this.loginForm.get('role')?.value;

      if (username && role) {
        this.authService.loginUser(username, role);
        this.router.navigate(['/dashboard']);
      }
    }
  }
}
