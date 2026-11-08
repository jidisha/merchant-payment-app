import { computed, Injectable, signal } from '@angular/core';

export type UserRole = 'SALES' | 'REVIEWER' | 'ADMIN';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getRole(): any {
    return this.currentRole();
  }
  private readonly USERNAME = 'USERNAME';
  private readonly ROLE = 'ROLE';
  private currentRoleSignal = signal<UserRole | null>(null);
  public currentRole = this.currentRoleSignal.asReadonly();

  public isAdmin = computed(() => this.currentRole() === 'ADMIN');
  public isReviewer = computed(() => this.currentRole() === 'REVIEWER');
  public isSales = computed(() => this.currentRole() === 'SALES');
  public hasRole = computed(() => !!this.currentRole());


  loginUser(username: string, role: UserRole) {
    // call api to login user and set user role
    this.currentRoleSignal.set(role);
    //store username and Role in localstorage
    this.storeInLocalStorage(this.USERNAME, username);
    this.storeInLocalStorage(this.ROLE, role);
  }

  isUserLoggedIn(): boolean {
    if (this.getUsername() && this.getUserRole()) {
      this.currentRoleSignal.set(this.getUserRole());
      return true;
    }
    return this.hasRole();
  }

  private storeInLocalStorage(keyName: string, value: string) {
    localStorage.setItem(keyName, value);
  }

  private getFromLocalStorage(keyName: string): string | null {
    return localStorage.getItem(keyName);
  }

  getUsername(): string | null {
    return this.getFromLocalStorage(this.USERNAME);
  }

  getUserRole(): UserRole | null {
    const role = this.getFromLocalStorage(this.ROLE);
    return role as UserRole | null;
  }

  logoutUser() {
    this.currentRoleSignal.set(null);
    localStorage.removeItem(this.USERNAME);
    localStorage.removeItem(this.ROLE);
  }

}
