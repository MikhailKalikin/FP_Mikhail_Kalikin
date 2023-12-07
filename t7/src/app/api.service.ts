import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey = '577b3bd2eec54e5a84a1ae825e746783';

  constructor(private http: HttpClient) {}

  public getLocation(city: string): Observable<any> {
    const params: HttpParams = new HttpParams()
      .append('q', `${city},RU`)
      .append('limit', '5')
      .append('appid', this.apiKey);

    const url = `http://api.openweathermap.org/geo/1.0/direct`;

    return this.http.get(url, { params: params });
  }

  public getWeatherInCity(lat: number, lon: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .append('lat', lat.toString())
      .append('lon', lon.toString())
      .append('appid', this.apiKey)
      .append('lang', 'ru')
      .append('units', 'metric');

    const url = `https://api.openweathermap.org/data/2.5/weather`;

    return this.http.get(url, { params: params });
  }

  public getImage(description: string): Observable<any> {
    const params: HttpParams = new HttpParams()
      .append('page', '1')
      .append('query', `${description} погода`)
      .append('client_id', 'cvbGiHa2qeqa15FC-20U8nNy8D4IvM-7C0YuCgFHi3A');

    const url = 'https://api.unsplash.com/search/photos';

    return this.http.get(url, { params: params });
  }
}
