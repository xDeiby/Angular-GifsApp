import { Component } from '@angular/core';
import { GiftsService } from 'src/app/gifts/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private giftsService: GiftsService) {}

  public get history(): string[] {
    return this.giftsService.history;
  }

  public searchElement(value: string) {
    this.giftsService.search(value);
  }
}
