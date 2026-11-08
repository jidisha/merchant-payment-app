import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Merchant } from '../services/data/data-service';
import { FormsModule, NgModel } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth/auth-service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-view-merchant',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './view-merchant.html',
  styleUrl: './view-merchant.scss',
})
export class ViewMerchant {
  merchantId = signal<number | null>(null);
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private authService = inject(AuthService);
  merchant = signal<Merchant | undefined>(undefined);
  risk: String = '';
  permitted: boolean = false;
  readonly isAdmin = this.authService.isAdmin() ?? false
  readonly isReviewer = this.authService.isReviewer() ?? false;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.merchantId.set(Number(id));
      this.merchant.set(this.dataService.getMerchantById(Number(id)));
      // Initialize the risk signal with the current merchant's risk level
      this.risk = this.merchant()?.risk || '';
      this.permitted = this.merchant()?.permitted || false;
    }
  }

  riskChanged() {
    const newRisk = this.risk;
    const currentMerchant = this.merchant();
    if (currentMerchant) {
      // Update the merchant's risk level
      currentMerchant.risk = newRisk;
    }
  }

  permittedChanged() {
    this.permitted = !this.permitted;
    const newPermitted = this.permitted;
    const currentMerchant = this.merchant();
    if (currentMerchant) {
      // Update the merchant's permitted status
      currentMerchant.permitted = newPermitted;
    }
  }
}
