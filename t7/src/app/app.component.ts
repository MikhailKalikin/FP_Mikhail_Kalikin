import { Component } from '@angular/core';
import {LocationDto} from "../dto/locationDto";
import {WeatherDto} from "../dto/weatherDto";
import {ApiService} from "./api.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  city: string = ""
  error: string = ""
  locationDto: LocationDto | null = null
  weatherDto: WeatherDto | null = null
  image: string = ""

  locationIsLoading: boolean = false
  weatherIsLoading: boolean = false
  imageIsLoading: boolean = false

  constructor(private api: ApiService) {}

  public searchLocation() {
    this.locationIsLoading = true
    setTimeout(async () => {
      if(!this.city) {
        console.error("введите город")
        this.error = "введите город"
        return
      }
      await this.api.getLocation(this.city)
        .pipe(finalize(() => this.locationIsLoading = false))
        .subscribe({
          next: (response) => {
            this.locationDto = response[0]
            console.log(this.locationDto)
            if(this.locationDto === undefined)
              this.error = "город не найден"
            else {
              this.error = ""
              this.getWeather()
            }
          },
          error: (error) => {
            console.error(error)
            this.error = error
          },
        })
    }, 1000)
  }

  private getWeather() {
    this.weatherIsLoading = true
    setTimeout(async () => {
      if(!this.locationDto) {
        console.error("город не найден")
        return
      }
      await this.api.getWeatherInCity(this.locationDto.lat, this.locationDto.lon)
        .pipe(finalize(() => this.weatherIsLoading = false))
        .subscribe({
          next: (response) => {
            console.log(response)
            this.weatherDto = {
              description: response.weather[0].description,
              temp: response.main.temp,
              feelsLike: response.main.feels_like,
              windSpeed: response.wind.speed,
              humidity: response.main.humidity
            }
            this.error = ""
            this.searchImage()
          },
          error: (error) => {
            console.error(error)
            this.error = error
          },
        })
    }, 1000)
  }

  public searchImage() {
    this.imageIsLoading = true
    setTimeout(async () => {
      if (!this.weatherDto) {
        console.error("не удалось получить погоду")
        return
      }
      await this.api.getImage(this.weatherDto.description)
        .pipe(finalize(() => this.imageIsLoading = false))
        .subscribe({
          next: (response) => {
            console.log(response)
            let index = Math.ceil(Math.random() * 3)
            this.image = response.results[index].urls.regular
            if(this.image === undefined)
              this.error = "не удалось получить картинку"
            else {
              this.error = ""
            }
          },
          error: (error) => {
            console.error(error)
            this.error = error
          }
        })
    }, 1000)
  }

}
