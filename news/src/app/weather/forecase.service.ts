import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, pluck, mergeMap, filter } from 'rxjs/operators';
import { HttpParams, HttpClient} from '@angular/common/http';

interface OpenWeatherResponse {
  list: {
    dt_text: string;
    main: {
      temp: number;
    }
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ForecaseService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getForecast(){
    return this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            .set('lat', String(coords.latitude))
            .set('lon', String(coords.longitude))
            .set('units', 'matric')
            .set('appid', 'c9b777edf3fe4d2e0c549ec4f1bb3ff9');
        }),
        switchMap(
          params => this.http.get<OpenWeatherResponse>(this.url, { params })
        ),
        pluck('list'),
        mergeMap(value => of(...value)),
        filter((value, index) => index % 8 === 0)
      );
  }

  getCurrentLocation(){
    return new Observable<Coordinates>(observer => {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          observer.next(position.coords);
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  }
}
