import { Component, Input, OnInit } from '@angular/core';
import {
  faInstagram,
  faSpotify,
  faTwitter,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { Artist, ArtistMediaKey } from '../../../types/artist';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
})
export class SocialMediaComponent implements OnInit {
  spotifyIcon = faSpotify;
  youtubeIcon = faYoutube;
  twitterIcon = faTwitter;
  instagramIcon = faInstagram;

  @Input() artist!: Artist;
  @Input() media!: 'spotify' | 'youtube' | 'twitter' | 'instagram';

  constructor() {}

  ngOnInit(): void {}

  getUrl(): string {
    const key = (this.media + 'Url') as ArtistMediaKey;
    return this.artist[key];
  }

  getIcon(): IconDefinition {
    const key = (this.media + 'Icon') as
      | 'spotifyIcon'
      | 'youtubeIcon'
      | 'twitterIcon'
      | 'instagramIcon';
    return this[key];
  }
}
