import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/types/artist';
import { Song } from 'src/app/types/song';

@Component({
  selector: 'app-artist-songs',
  templateUrl: './artist-songs.component.html',
})
export class ArtistSongsComponent implements OnInit {
  name = 'takayan';
  image =
    'https://akamai.sscdn.co/letras/338x298/fotos/f/5/0/4/f50463517748ddaebd314419cf365203.jpg';
  country = 'JAPAN';
  spotifyUrl = 'https://open.spotify.com/artist/79JgYJHiBUZcvYqOC5Zufn';
  youtubeUrl = 'https://www.youtube.com/channel/UCHGGjDM6Z7nq5qBIPzn1D7Q';
  twitterUrl = 'https://twitter.com/takayan_gorizal';
  instagramUrl = 'https://www.instagram.com/takayan_gorizal/';
  about = `
  Takayan was born in ...
  Once he...

  Takayan has a YouTube channel...
  `;

  songs = [
    { name: 'Bad example', accessCount: 5000, createdOn: '2022-01-01' },
    { name: 'Cheating is a crime', accessCount: 4000, createdOn: '2022-01-10' },
    { name: "It's ok to envy", accessCount: 3000, createdOn: '2021-01-01' },
    { name: 'Toy', accessCount: 2000, createdOn: '2020-01-01' },
    { name: 'Just disappear', accessCount: 1000, createdOn: '2019-01-01' },
  ] as Song[];
  songOrder = 'trending';

  constructor() {}

  ngOnInit(): void {}

  getArtist(): Artist {
    return {
      id: 1,
      name: this.name,
      country: this.country,
      image: this.image,
      songs: [],
      instagramUrl: this.instagramUrl,
      youtubeUrl: this.youtubeUrl,
      twitterUrl: this.twitterUrl,
      spotifyUrl: this.spotifyUrl,
    };
  }

  orderSongs(): void {
    switch (this.songOrder) {
      case 'trending':
        this.songs = this.songs.sort((a, b) => b.accessCount - a.accessCount);
        break;
      case 'name':
        this.songs = this.songs.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case 'addedDate':
        this.songs = this.songs.sort(
          (a, b) =>
            new Date(a.createdOn).getDate() - new Date(b.createdOn).getDate()
        );
        break;
    }
  }
}
