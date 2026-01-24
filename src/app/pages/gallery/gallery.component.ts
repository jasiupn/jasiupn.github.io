import { Component } from '@angular/core';
import { categories } from '../../shared/data/categories';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  categories = categories;
}
