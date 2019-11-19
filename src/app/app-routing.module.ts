import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumComponent} from './album/album.component';

const routes: Routes = [
    { path: '', component: AlbumsComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
