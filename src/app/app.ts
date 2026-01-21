import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private api = inject(ApiService);

  userInput = signal('');
  result = signal<any>(null);
  loading = signal(false);

  async handlePress() {
    if (!this.userInput()) return;

    this.loading.set(true);
    try {
      const response = await this.api.sendData(this.userInput());
      this.result.set(response);
    } catch (error) {
      this.result.set({ error: 'Failed to fetch data' });
    } finally {
      this.loading.set(false);
    }
  }
}
