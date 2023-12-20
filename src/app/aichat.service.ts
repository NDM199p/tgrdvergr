import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AichatService {
  BASE_URL = 'https://rat-fond-grossly.ngrok-free.app';

  constructor(private http: HttpClient) {}

  chat(msg: string) {
    return this.http.post<{ bot: string }>(`${this.BASE_URL}/chat`, {
      chat: msg,
    });
  }
}
