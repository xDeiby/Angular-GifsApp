import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from './interfaces/gifs.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  private _apiKey: string;
  private _apiUrl: string;
  private _history: string[];

  public gifs: Gif[];

  public get history(): string[] {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('search_history')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('results')!) || [];
    this._apiKey = environment.api_key;
    this._apiUrl = environment.api_url;
  }

  public search(value: string) {
    value = value.trim().toLocaleLowerCase();

    if (!this._history.includes(value)) {
      this._history.unshift(value);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('search_history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '20')
      .set('q', value);

    this.http
      .get<SearchGifsResponse>(`${this._apiUrl}/search`, { params })
      .subscribe((result) => {
        this.gifs = result.data;
        localStorage.setItem('results', JSON.stringify(result.data));
      });
  }
}
