import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../gifts.service';
import { Gif } from '../interfaces/gifs.interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {
  public get gifs(): Gif[] {
    return this.giftsService.gifs;
  }

  constructor(private giftsService: GiftsService) {}
}
