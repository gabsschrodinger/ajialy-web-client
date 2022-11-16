import { Component, OnInit } from '@angular/core';
import {
  faSpotify,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {
  name = 'takayan';
  image =
    'https://akamai.sscdn.co/letras/338x298/fotos/f/5/0/4/f50463517748ddaebd314419cf365203.jpg';
  country = 'JAPAN';
  spotifyUrl = 'https://open.spotify.com/artist/79JgYJHiBUZcvYqOC5Zufn';
  youtubeUrl = 'https://www.youtube.com/channel/UCHGGjDM6Z7nq5qBIPzn1D7Q';
  twitterUrl = 'https://twitter.com/takayan_gorizal';
  spotifyIcon = faSpotify;
  youtubeIcon = faYoutube;
  twitterIcon = faTwitter;

  about = `
  Takayan was born in ...
  Once he...

  Takayan has a YouTube channel...
  `;

  constructor() {}

  ngOnInit(): void {}

  getImageUrl(): string {
    return `url(${this.image})`;
  }
}
