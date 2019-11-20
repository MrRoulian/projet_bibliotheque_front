import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import {Album} from '../shared/inerfaces/album.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums;
  // private property to store album value
  private _album: Album;


  constructor(private _albumService: AlbumService) {
    this.albums = [];
    this._album = {} as Album;
  }

  ngOnInit() {
    this._albumService
      .getAlbums().subscribe((album: Album[]) => this.albums = album);
  }

  addAlbum(event: any) {
    if (event.target.newalbum.value && event.target.author.value) {

      if (event.target.photo.value){
        this._album = {
          titre: event.target.newalbum.value,
          photo: event.target.photo.value,
          description: event.target.description.value,
          auteur: event.target.author.value
        };
      } else {
        this._album = {
          titre: event.target.newalbum.value,
          photo: 'https://images-na.ssl-images-amazon.com/images/I/71YWmrhVCCL._SX425_.jpg',
          description: event.target.description.value,
          auteur: event.target.author.value
        };
      }

      this._albumService.createAlbum(this._album).subscribe(_ => _);

      event.target.newalbum.value = '';
      event.target.description.value = '';
      event.target.author.value = '';
    }

    return false;
  }
}
