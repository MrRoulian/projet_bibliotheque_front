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
  private temp: Photo[];
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

  getPhoto(idAlbum: string, numPhoto: string): Observable<Photo> {
    switch ( numPhoto ) {
      case '0' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo0);
        break;
      case '1' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo1);
        break;
      case '2' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo2);
        break;
      case '3' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo3);
        break;
      case '4' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo4);
        break;
      case '5' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo5);
        break;
      case '6' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo6);
        break;
      case '7' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo7);
        break;
      case '8' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo8);
        break;
      case '9' :
        return this._http.get<Photo>(this._backendURL.oneAlbum.replace(':id', idAlbum).photo9);
        break;
    }
  }

  /*getPhotos(idAlbum: string): Observable<Photo[]> {
    this.temp = [];
    this.album =
  }*/



  setPhoto(idAlbum: string, numPhoto: string, photo: Photo): Observable<any> {
    switch ( numPhoto ) {
      case '0' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo0 = photo)
        )), this._options());
        break;
      case '1' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo1 = photo)
        )), this._options());
        break;
      case '2' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo2 = photo)
        )), this._options());
        break;
      case '3' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo3 = photo)
        )), this._options());
        break;
      case '4' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo4 = photo)
        )), this._options());
        break;
      case '5' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo5 = photo)
        )), this._options());
        break;
      case '6' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo6 = photo)
        )), this._options());
        break;
      case '7' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo7 = photo)
        )), this._options());
        break;
      case '8' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo8 = photo)
        )), this._options());
        break;
      case '9' :
        return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', idAlbum), from(this.getAlbum(idAlbum).pipe(
          map(_ => _.photo9 = photo)
        )), this._options());
        break;
    }
  }

  update(album: Album): Observable<any>{
    return this._http.put<Album>(this._backendURL.oneAlbum.replace(':id', album.id), album , this._options());
  }

  delete(idAlbum: string): Observable<string> {
    return this._http.delete(this._backendURL.onePeople.replace(':id', idAlbum))
      .pipe(
        map(_ => idAlbum)
      );
  }

    /*uploadImage(file) {
        const id = Math.random().toString(36).substring(2);
        const ref = this.firestorage.ref(id);
        return ref.put(file);
    }*/

    /*createPhoto(data) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('photos')
                .add({
                    albumId: data.albumId,
                    name: data.name,
                    author: data.author,
                    description: data.description,
                    imagePath: data.imagePath
                })
                .then(res => {}, err => reject(err));
        });
    }*/

  /**
   * Function to return request options
   */
  private _options(headerList: object = {}): any {
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  }
}
