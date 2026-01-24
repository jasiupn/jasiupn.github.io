import { Component, HostListener, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {
  isVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Sprawdź pozycję od razu po załadowaniu
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const oldValue = this.isVisible;
    // Pokaż przycisk gdy przewinięto >200px w dół
    this.isVisible = scrollPosition > 200;

    // Wymuś wykrycie zmian jeśli wartość się zmieniła
    if (oldValue !== this.isVisible) {
      this.cdr.detectChanges();
    }
  }

  scrollToTop(): void {
    const header = document.getElementById('page-top');

    if (header) {
      header.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

