import { Component, Input } from '@angular/core';
import { GalleryItem } from '../models/gallery-item.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  @Input() items: GalleryItem[] = [];
  @Input() tileRatio: 'landscape' | 'portrait' = 'landscape';

  activeImages: string[] = [];
  activeThumbs: string[] = [];
  activeDescriptions: string[] = [];
  activeTitle = '';
  lightboxVisible = false;

  open(item: GalleryItem) {
    this.activeImages = item.images;
    this.activeThumbs = item.thumbs.length ? item.thumbs : item.images;
    this.activeDescriptions = item.descriptions || [];
    this.activeTitle = item.title;
    this.lightboxVisible = true;
  }
}

