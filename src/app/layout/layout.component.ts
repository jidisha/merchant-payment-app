import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth-service';

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);
  private authService = inject(AuthService);
  readonly isAdmin = this.authService.isAdmin() ?? false;
  readonly isReviewer = this.authService.isReviewer() ?? false;
  readonly isSales = this.authService.isSales() ?? false;
  readonly userName = this.authService.getUsername();
  userRole = this.authService.getUserRole() ?? null;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  opened = true;
  clickLogo() {
    return !this.opened;
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}
