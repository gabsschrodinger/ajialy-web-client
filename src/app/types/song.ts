import { Artist } from "./artist";
import { PropsExcept } from "./utils";

export enum OriginalLyrics {
  JAPANESE = 'JAPANESE',
  ENGLISH = 'ENGLISH',
  PORTUGUESE = 'PORTUGUESE',
}

export type Song = {
  id: number;
  name: string;
  artists: PropsExcept<Artist, 'songs'>[];
  japaneseLyrics: string;
  englishLyrics: string;
  portugueseLyrics: string;
  originalLyrics: OriginalLyrics;
};
