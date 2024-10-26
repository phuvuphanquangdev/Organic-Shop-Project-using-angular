import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    small: string
  };
  alt_description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getRandomPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID ZsVEYt5dmawTCEAl_PAlb4xOVYE6ZqdwRia49V4VmOU'
      }
    });
  }
}
