import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/types/artist';
import { SocialMedia } from 'src/app/types/socialMedia';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
})
export class ArtistHeaderComponent implements OnInit {
  @Input() artist!: Artist;
  socialMedias: SocialMedia[] = ['spotify', 'youtube', 'twitter', 'instagram'];

  constructor() {}

  ngOnInit(): void {}

  getImageUrl(): string {
    return `url(${this.artist.image})`;
  }
}
