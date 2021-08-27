import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("https://run.mocky.io/v3/e0782dcb-02fe-4bcb-b5ea-df42360645ea").pipe(map((result: any) => result));

  }
}