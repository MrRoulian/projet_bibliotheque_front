import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums().subscribe(albums => (this.albums = albums));
  }

  addAlbum(event: any) {
    if (event.target.newalbum.value && event.target.author.value) {
      // todo : vérifier si l'album existe ou pas

      // ensuite, créer l'album dans firebase :
      this.albumService.createAlbum({
          name: event.target.newalbum.value,
          author: event.target.author.value,
          description: event.target.description.value
      });

      
    }

    return false;
  }

}
