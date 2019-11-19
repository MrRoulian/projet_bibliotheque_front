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

  constructor(private albumService: AlbumService) {
    this.albums = [];
  }

  ngOnInit() {
    this.albumService
      .getAlbums().subscribe((album: Album[]) => this.albums = album);
  }

  addAlbum(event: any) {
    if (event.target.newalbum.value && event.target.author.value) {
      // todo : vérifier si l'album existe ou pas

      // ensuite, créer l'album dans firebase :

      this.albumService.createAlbum({
        titre: event.target.newalbum.value,
        photo: 'https://images-na.ssl-images-amazon.com/images/I/71YWmrhVCCL._SX425_.jpg',
        description: event.target.description.value,
        auteur: event.target.auteur,
      } as Album);

      /*this.albumService.createAlbum({
          name: event.target.newalbum.value,
          author: event.target.author.value,
          description: event.target.description.value
      });*/
    }

    return false;
  }

}
