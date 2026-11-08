import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { authGuard } from './guards/auth-guard';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
    { path: 'login', canActivate: [loginGuard], component: UserLoginComponent },
    {
        path: '', canActivate: [authGuard],
        loadComponent: () =>
            import('./layout/layout.component')
                .then(c => c.LayoutComponent),
        loadChildren: () =>
            import('./features/merchant/merchant-routing-module')
                .then(r => r.MerchantRoutingModule)
    },
];
