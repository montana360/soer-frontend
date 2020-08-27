import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

// const server = 'http://45.76.46.240/api/';
const server = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    // setting token as variable
    token = localStorage.getItem('token');

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


   // index of a resource
   get(url) {
    const config = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(server + url, { headers: config });
  }

  // store a new resource
  store(url, payload) {
    const config = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(server + url, payload, { headers: config });
  }

  // show a single resource
  show(url, id) {
    const config = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(server + url + '/' + id, { headers: config });
  }

  // show edit details for  a single resource
  edit(url, id) {
    const config = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get(server + url + '/' + id, { headers: config });
  }

  // update a single resource
  update(url, id, payload) {
    const config = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.patch(server + url + '/' + id, payload, {
      headers: config
    });
  }

  // delete a particular resource
  destroy(url, id) {
    const config = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.delete(server + url + '/' + id, { headers: config });
  }

  // registration of users
  createUser(url, payload) {
    const config = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(server + url, payload, { headers: config });
  }

  // authentication for user login
  authenticate(payload) {
    const config = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    config.append('Accept', 'application/json');
    // return this.http.post('http://45.76.46.240/oauth/token', payload, {
    return this.http.post('http://127.0.0.1:8000/oauth/token', payload, {
      headers: config
    });
  }

  // get user id
  userID() {
    return localStorage.getItem('userID');
  }

  // getting access token
  getToken() {
    return localStorage.getItem('token');
  }

  // function to check user type (either customer or staff)
  userData() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // check user login
  isLoggedIn() {
    return this.getToken() !== null && this.userData() !== null;
  }

  // logout method
  logout() {
    localStorage.clear();
    // console.log('Logout success');
    this.router.navigate(['/auth/signin-v2/']);
  }
}
