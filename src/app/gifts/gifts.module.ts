import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [GiftsPageComponent, SearchComponent, ResultsComponent],
  imports: [CommonModule],
  exports: [GiftsPageComponent],
})
export class GiftsModule {}
