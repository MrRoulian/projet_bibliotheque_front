import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumService} from '../album.service';
import {Photo} from '../shared/inerfaces/album.interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private id;
  public album;
  public photos;
  private _occup: boolean[];


  private fileToUpload = null;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');

        this.album = this.albumService.getAlbum(this.id).subscribe(album => (this.album = album));

        // this.photos = this.albumService.getPhotos(this.id).subscribe(photos => (this.photos = photos));

        for (let i = 0 ; i < 10 ; i++ ) {
          this.photos[i] = this.albumService.getPhoto(this.id, i.toString()).subscribe(p => (this.photos[i] = p));
        }
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

  getPhotoUrl(photo) {
    const imagePath = photo.payload.doc.data().imagePath;
    if (imagePath) {
      const projectId = photo.payload.doc.ref.parent.firestore._databaseId.projectId;

      return 'https://firebasestorage.googleapis.com/v0/b/' + projectId + '.appspot.com/o/' + imagePath + '?alt=media';
    } else {
      return 'https://www.labaleine.fr/sites/baleine/files/image-not-found.jpg';
    }
  }

}
