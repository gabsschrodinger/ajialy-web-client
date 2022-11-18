import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/types/artist';
import { OriginalLyrics } from 'src/app/types/song';
import { PropsExcept } from 'src/app/types/utils';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
})
export class SongComponent implements OnInit {
  selectedLyrics!: string;
  id: number = 1;
  name: string = 'Bad Example';
  artists: PropsExcept<Artist, 'songs'>[] = [
    {
      id: 1,
      name: 'takayan',
      country: 'JAPAN',
      image:
        'https://akamai.sscdn.co/letras/338x298/fotos/f/5/0/4/f50463517748ddaebd314419cf365203.jpg',
      spotifyUrl: 'https://open.spotify.com/artist/79JgYJHiBUZcvYqOC5Zufn',
      youtubeUrl: 'https://www.youtube.com/channel/UCHGGjDM6Z7nq5qBIPzn1D7Q',
      twitterUrl: 'https://twitter.com/takayan_gorizal',
      instagramUrl: 'https://www.instagram.com/takayan_gorizal/',
    },
    {
      id: 1,
      name: 'takayan',
      country: 'JAPAN',
      image:
        'https://akamai.sscdn.co/letras/338x298/fotos/f/5/0/4/f50463517748ddaebd314419cf365203.jpg',
      spotifyUrl: 'https://open.spotify.com/artist/79JgYJHiBUZcvYqOC5Zufn',
      youtubeUrl: 'https://www.youtube.com/channel/UCHGGjDM6Z7nq5qBIPzn1D7Q',
      twitterUrl: 'https://twitter.com/takayan_gorizal',
      instagramUrl: 'https://www.instagram.com/takayan_gorizal/',
    },
  ];
  japaneseLyrics: string = `
  some japanese lyrics
  some japanese lyrics
  some japanese lyrics
  some japanese lyrics
  some japanese lyrics
  some japanese lyrics
  some japanese lyrics
  some japanese lyrics
  some japanese lyrics
  some japanese lyrics
  `;
  englishLyrics: string = `
  some english lyrics
  some english lyrics
  some english lyrics
  some english lyrics
  some english lyrics
  some english lyrics
  some english lyrics
  some english lyrics
  some english lyrics
  `;
  portugueseLyrics: string = `
  some portuguese lyrics
  some portuguese lyrics
  some portuguese lyrics
  some portuguese lyrics
  some portuguese lyrics
  some portuguese lyrics
  some portuguese lyrics
  `;
  originalLyrics: OriginalLyrics = OriginalLyrics.JAPANESE;
  accessCount: number = 5000;
  createdOn: string = '2022-01-01';
  updatedOn: string = '2022-01-02';

  constructor() {}

  ngOnInit(): void {
    this.updateSelectedLyrics(this.originalLyrics);
  }

  getArtists(): string[] {
    return this.artists.map(({ name }) => name);
  }

  getPossibleLyrics(): ('PORTUGUESE' | 'ENGLISH' | 'JAPANESE')[] {
    return ['PORTUGUESE', 'ENGLISH', 'JAPANESE'];
  }

  isSelectedLyrics(lyrics: 'PORTUGUESE' | 'ENGLISH' | 'JAPANESE'): boolean {
    switch (lyrics) {
      case 'ENGLISH':
        return this.selectedLyrics === this.englishLyrics;
      case 'JAPANESE':
        return this.selectedLyrics === this.japaneseLyrics;
      case 'PORTUGUESE':
        return this.selectedLyrics === this.portugueseLyrics;
    }
  }

  updateSelectedLyrics(lyrics: 'PORTUGUESE' | 'ENGLISH' | 'JAPANESE'): void {
    switch (lyrics) {
      case 'ENGLISH':
        this.selectedLyrics = this.englishLyrics;
        break;
      case 'JAPANESE':
        this.selectedLyrics = this.japaneseLyrics;
        break;
      case 'PORTUGUESE':
        this.selectedLyrics = this.portugueseLyrics;
    }
  }
}
