import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth/auth-service';
import { DataService } from '../services/data/data-service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    RouterLink,
    MatIcon,
    FormsModule,
    MatButton,
    MatInput,
    MatFormFieldModule,
    MatLabel,
    DatePipe
  ]
})
export class DashboardComponent {
  authService = inject(AuthService)
  merchantData = inject(DataService).getMerchantData();
  readonly isSales = this.authService.isSales() ?? false;
  readonly isReviewer = this.authService.isReviewer() ?? false;
  search: string = '';

  searchMerchants() {
    const filteredMerchants = this.merchantData.filter(merchant =>
      merchant.companyDetails.companyName.toLowerCase().includes(this.search.toLowerCase())
    );
    return filteredMerchants;
  }
}
