import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(
    public router: Router,
    public http: HttpClient,
    public message: NzMessageService
  ) {}

  set setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  set setToken(token: string) {
    const userJson = localStorage.getItem('user') || '{}';
    const user = JSON.parse(userJson);
    user.User.GUID = token;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  get getUser(): { User: any; token: string } | null {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
