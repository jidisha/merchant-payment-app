import { Injectable, signal } from '@angular/core';
import merchantData from '../../assets/data/merchant-registration-data.json';
import { Observable } from 'rxjs';

export interface Merchant {
  id: number;
  companyDetails: {
    companyName: String;
    categoryCode: String;
    businessWebsite: String;
    panNumber: String;
  };
  contactDetails: {
    email: String;
    phone: String;
  };
  bankDetails: {
    bankName: String;
    accountHolderName: String;
    accountNumber: String;
    cardNumber: String;
  };
  createdDate: String;
  permitted: boolean;
  risk: String;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {

  merchants = signal<Merchant[]>(merchantData);
  getMerchantData() {
    console.log('Merchant data:', this.merchants());
    return this.merchants();
  }

  getMerchantById(id: number): Merchant | undefined {
    return this.merchants().find(merchant => merchant.id === id);
  }

  saveDraft(formData: any, merchantId: number): Observable<any> {
    // Simulate saving the draft to a backend or local storage
    console.log('Saving draft:', formData);
    // Here we can making an HTTP request to save the data.
    // For demonstration purposes, we'll just return an observable.
    return new Observable(observer => {
      observer.next({
        message: 'Draft saved successfully',
        data: formData
      });
      //add to merchants list if not already present
      const existingMerchantIndex = this.merchants().findIndex(merchant => merchant.id === merchantId);
      if (existingMerchantIndex === -1) {
        this.merchants.update(merchants => [...merchants, { id: merchantId, ...formData }]);
        console.log('Merchant added to the list:', this.merchants());
      } else {
        //update existing merchant
        this.merchants.update(merchants => {
          const updatedMerchants = [...merchants];
          updatedMerchants[existingMerchantIndex] = { id: merchantId, ...formData };
          return updatedMerchants;
        });
      }
      observer.complete();
    });
  }

}
