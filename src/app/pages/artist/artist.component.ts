import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {
  name = 'takayan'
  image = 'https://akamai.sscdn.co/letras/338x298/fotos/f/5/0/4/f50463517748ddaebd314419cf365203.jpg'
  country = 'JAPAN'

  constructor() { }

  ngOnInit(): void {
  }

}
