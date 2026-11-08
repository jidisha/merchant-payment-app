// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// // import { UserAuthService } from 'src/app/services/user-auth/user-auth.service';
// import { Router } from '@angular/router';
// import { throwError } from 'rxjs/internal/observable/throwError';
// // import { environment } from 'src/environments/environment';
// import { catchError, switchMap, filter, take } from 'rxjs/operators';

// @Injectable()
// export class HttpCustomInterceptor implements HttpInterceptor {
// //   private tokenRefreshed = false;
// //   private tokenRefreshTask: BehaviorSubject<any> = new BehaviorSubject<any>(
// //     null
// //   );

// //   constructor(
// //     public userAuthService: UserAuthService,
// //     private router: Router
// //   ) {}

// //   intercept(
// //     request: HttpRequest<any>,
// //     next: HttpHandler
// //   ): Observable<HttpEvent<any>> {
// //     request = this.addBearerToken(
// //       request,
// //       this.userAuthService.getJwtToken()
// //     );

// //     return next.handle(request).pipe(
// //       catchError((error) => {
// //         if (error instanceof HttpErrorResponse && error.status === 401) {
// //           return this.handle401Error(request, next, error);
// //         } else {
// //           return throwError(error);
// //         }
// //       })
// //     );
// //   }

// //   private addBearerToken(request: HttpRequest<any>, token: string) {
// //     return request.clone({
// //       setHeaders: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //   }

// //   private handle401Error(
// //     request: HttpRequest<any>,
// //     next: HttpHandler,
// //     error
// //   ): Observable<HttpEvent<any>> {
// //     /**
// //      * If 401 error is from token endpoint, do not retry but go to login page
// //      */
// //     if (this.isTokenEndpoint(request) && !this.router.url.includes('/login')) {
// //       this.router.navigate(['login'], {
// //         queryParams: { returnUrl: this.router.routerState.snapshot.url },
// //       });
// //       return next.handle(null);
// //     }
// //     if (!this.tokenRefreshed) {
// //       this.tokenRefreshed = true;
// //       this.tokenRefreshTask.next(null);

// //       return this.userAuthService.refreshBearerToken().pipe(
// //         switchMap((token: any) => {
// //           this.tokenRefreshed = false;
// //           this.tokenRefreshTask.next(token.token);
// //           return next.handle(this.addBearerToken(request, token.token));
// //         })
// //       );
// //     } else {
// //       return this.tokenRefreshTask.pipe(
// //         filter((token) => token != null),
// //         take(1),
// //         switchMap((token) => {
// //           return next.handle(this.addBearerToken(request, token));
// //         })
// //       );
// //     }
// //   }

// //   private isTokenEndpoint(request: HttpRequest<any>) {
// //     return (
// //       request.url === `${environment.authServiceUrl}/v1/tokens`
// //     );
// //   }

// }
