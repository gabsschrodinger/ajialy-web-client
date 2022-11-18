import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaComponent } from './components/artist/social-media/social-media.component';
import { ArtistHeaderComponent } from './components/artist/artist-header/artist-header.component';
import { ArtistSongsComponent } from './pages/artist-songs/artist-songs.component';
import { SongItemComponent } from './components/song/song-item/song-item.component';
import { FormsModule } from '@angular/forms';
import { SongComponent } from './pages/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArtistComponent,
    FooterComponent,
    SocialMediaComponent,
    ArtistHeaderComponent,
    ArtistSongsComponent,
    SongItemComponent,
    SongComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
