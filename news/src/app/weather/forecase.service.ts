import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, pluck, mergeMap, filter, toArray } from 'rxjs/operators';
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
            .set('units', 'metric')
            .set('appid', 'c9b777edf3fe4d2e0c549ec4f1bb3ff9');
        }),
        switchMap(
          params => this.http.get<OpenWeatherResponse>(this.url, { params })
        ),
        pluck('list'),
        mergeMap(value => of(...value)),
        filter((value, index) => index % 8 === 0),
        map(value => {
          return {
            dateString: value.dt_text,
            temp: value.main.temp
          };
        }),
        toArray()
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
