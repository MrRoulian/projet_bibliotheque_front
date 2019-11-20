import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Album, Photo} from './shared/inerfaces/album.interface';
import {from, Observable, of} from 'rxjs';
import {environment} from '../environments/environment';
import {flatMap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  // private property to store all backend URLs
  private readonly _backendURL: any;
  private temp;
  private album: Album;

  constructor(private _http: HttpClient) {
    this._backendURL = {};
    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  createAlbum(album: Album) {
    return this._http.post<Album>(this._backendURL.allAlbum, album, this._options());
  }

  getAlbum(id: string): Observable<Album> {
    return this._http.get<Album>(this._backendURL.oneAlbum.replace(':id', id));
  }

  getAlbums(): Observable<Album[]> {
    return this._http.get<Album[]>(this._backendURL.allAlbum);
  }

  update(idAlbum: string, album: Album): Observable<any>{
    return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), album , this._options());
  }

  delete(idAlbum: string): Observable<string> {
    console.log(idAlbum);
    return this._http.delete(this._backendURL.oneAlbum.replace(':id', idAlbum))
      .pipe(
        map(_ => idAlbum)
      );
  }

  /**
   * Function to return request options
   */
  private _options(headerList: object = {}): any {
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  }
}
