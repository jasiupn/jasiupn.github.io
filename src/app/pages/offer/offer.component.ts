import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.initScrollReveal();
    this.handleQueryScroll();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /* ======================================================
     SCROLL REVEAL – IntersectionObserver
  ====================================================== */
  private initScrollReveal(): void {
    const elements = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]');

    if (!elements.length) return;

    this.observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target); // animacja tylko raz
            }
          });
        },
        {
          root: null,
          threshold: 0.2,          // 20% elementu widoczne
          rootMargin: '0px 0px -10% 0px' // delikatnie wcześniej
        }
    );

    elements.forEach(el => this.observer!.observe(el));
  }

  /* ======================================================
     QUERY PARAM SCROLL (np. ?scrollTo=jak-dzialamy)
  ====================================================== */
  private handleQueryScroll(): void {
    this.route.queryParams.subscribe(params => {
      if (params['scrollTo']) {
        const targetId = params['scrollTo'];

        requestAnimationFrame(() => {
          const el = document.getElementById(targetId);
          el?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      }
    });
  }
}
