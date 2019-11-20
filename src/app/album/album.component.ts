import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumService} from '../album.service';
import {Photo} from '../shared/inerfaces/album.interface';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private id;
  public album;
  private _occup: boolean[];


  private fileToUpload = null;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');

        this.album = this.albumService.getAlbum(this.id).subscribe(album => (this.album = album));
      });
  }

  setFile(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  addPhoto(event: any) {
    /*
    if (this.fileToUpload && event.target.title.value && event.target.author.value) {

      this.albumService.setPhoto()


        this.albumService.uploadImage(this.fileToUpload)
            .catch(a => {
              alert('Une erreur est survenue !');
            }).then(r => {
              if (r.state === 'success') {
                const path = r.metadata.fullPath;

                this.albumService.createPhoto({
                    albumId: this.id,
                    author: event.target.author.value,
                    description: event.target.description.value,
                    name: event.target.title.value,
                    imagePath: path
                });

                return true;
              }
        });
    }
    */
    return false;
  }

}
