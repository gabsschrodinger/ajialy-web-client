import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/types/song';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
})
export class SongItemComponent implements OnInit {
  @Input() song!: Song;
  @Input() index!: number;

  constructor() {}

  ngOnInit(): void {}
}
