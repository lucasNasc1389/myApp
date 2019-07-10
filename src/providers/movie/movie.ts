import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private base_api = "https://api.themoviedb.org/3/";  

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovie() {
    return this.http.get(this.base_api + "movie/popular?api_key=1dfced1a897e19e461363cdc152a8cb6");
  }

}