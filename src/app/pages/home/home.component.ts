import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from '../../shared/data/categories';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  categories = categories;
  isDesktopView = false;

  private resizeListener: (() => void) | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreenSize();
    this.resizeListener = () => this.checkScreenSize();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private checkScreenSize() {
    this.isDesktopView = window.innerWidth > 768;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
