import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  
  // Since we are in a browser, we can't hide this URL easily.
  // We usually point this to a relative path or a known global config.
  private baseUrl = 'https://weathertracker-api.victoriousstone-1cf870b3.westeurope.azurecontainerapps.io/Weather';

  async sendData(payload: string) {
    return await firstValueFrom(
      this.http.get(`${this.baseUrl}/${payload}`)
    );
  }
}