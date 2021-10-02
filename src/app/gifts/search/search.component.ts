import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../gifts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  constructor(private giftsService: GiftsService) {}

  @ViewChild('giftSearch')
  public giftSearch!: ElementRef<HTMLInputElement>;

  public addSearch(): void {
    const value = this.giftSearch.nativeElement.value;
    value && this.giftsService.search(value);
    this.giftSearch.nativeElement.value = '';
  }
}
