import { Song } from './song';
import { PropsExcept } from './utils';

export type ArtistMediaKey =
  | 'spotifyUrl'
  | 'youtubeUrl'
  | 'twitterUrl'
  | 'instagramUrl';

export type Artist = {
  id: number;
  name: string;
  image: string;
  songs: PropsExcept<Song, 'artists'>[];
  spotifyUrl: string;
  youtubeUrl: string;
  twitterUrl: string;
  instagramUrl: string;
};
