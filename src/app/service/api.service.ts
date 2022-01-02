import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://api.jikan.moe/v3';

  constructor(private http: HttpClient) {}

  getTopAiringAnimes() {
    return this.http.get(this.url + '/top/anime/1/airing').pipe(
      catchError((err) => {
        if (err) {
          return throwError(err);
        }
      })
    );
  }

  getTopAnimes() {
    return this.http.get(this.url + '/top/anime/1/tv').pipe(
      catchError((err) => {
        if (err) {
          return throwError(err);
        }
      })
    );
  }

  getTopUpcomingAnimes() {
    return this.http.get(this.url + '/top/anime/1/upcoming').pipe(
      catchError((err) => {
        if (err) {
          return throwError(err);
        }
      })
    );
  }

  getAnime(animeId) {
    return this.http.get(this.url + '/anime/' + animeId).pipe(
      catchError((err) => {
        if (err) {
          return throwError(err);
        }
      })
    );
  }
}
