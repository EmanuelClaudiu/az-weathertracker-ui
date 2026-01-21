import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  
  // Since we are in a browser, we can't hide this URL easily.
  // We usually point this to a relative path or a known global config.
  private baseUrl = 'http://135.236.119.31:8080/Weather'; 

  async sendData(payload: string) {
    return await firstValueFrom(
      this.http.get(`${this.baseUrl}/${payload}`)
    );
  }
}