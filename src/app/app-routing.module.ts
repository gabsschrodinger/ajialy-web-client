import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistSongsComponent } from './pages/artist-songs/artist-songs.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { HomeComponent } from './pages/home/home.component';
import { SongComponent } from './pages/song/song.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'artist/songs', component: ArtistSongsComponent },
  { path: 'song', component: SongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
