import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumService} from '../album.service';
import {Album, Photo} from '../shared/inerfaces/album.interface';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private id;
  public album;
  private _album: Album;
  private _occup: boolean[];


  private fileToUpload = null;

  constructor(private route: ActivatedRoute, private _albumService: AlbumService) {
    this._album = {} as Album;
  }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');

        this.album = this._albumService.getAlbum(this.id).subscribe(album => (this.album = album));
      });
  }

  addPhoto(event: any) {

    switch (event.target.numeroImg.value) {
      case '0' :
        this._album.photo0 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '1' :
        this._album.photo1 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '2' :
        this._album.photo2 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '3' :
        this._album.photo3 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '4' :
        this._album.photo4 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '5' :
        this._album.photo5 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '6' :
        this._album.photo6 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '7' :
        this._album.photo7 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '8' :
        this._album.photo8 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      case '9' :
        this._album.photo9 = {
          path: event.target.path.value,
          titre: event.target.title.value,
          auteur: event.target.author.value,
          description: event.target.description.value,
        } as Photo;
        break;
      default :
        alert('Veuillez entrer un numéro entre 0 et 9 qui correspond à l\'emplacement de l\'image dans le champ numéro de l\'image');
        break;
    }

    this._albumService.update(this.id, this._album).subscribe(_ => _);

    return false;
  }

  deleteAlbum() {
    if ( confirm('Voulez vous vraiment supprimer cet album ? Ceci est irréversible' ) ) {
      this._albumService.delete(this.id).subscribe(_ => _);
    } else {
      
    }
  }

}
