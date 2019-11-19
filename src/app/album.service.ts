import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private firestore: AngularFirestore, private firestorage: AngularFireStorage) { }

    createAlbum(albumData) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('albums')
                .add({
                    name: albumData.name,
                    author: albumData.author,
                    description: albumData.description
                })
                .then(res => {}, err => reject(err));
        });
    }

    getAlbum(id) {
        return this.firestore.collection('albums').doc(id).snapshotChanges();
    }

    getAlbums() {
        return this.firestore.collection('albums').snapshotChanges();
    }

    getPhotos(albumId) {
        return this.firestore.collection('photos',  ref => ref.where('albumId', '==', albumId)).snapshotChanges();
    }

    uploadImage(file) {
        const id = Math.random().toString(36).substring(2);
        const ref = this.firestorage.ref(id);
        return ref.put(file);
    }

    createPhoto(data) {
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
    }
}
