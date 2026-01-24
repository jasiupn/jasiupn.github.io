import { Component, AfterViewInit } from '@angular/core';
import { projects } from '../../shared/data/projects';
import { artwork } from '../../shared/data/artwork';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  project = projects;
  artworks = artwork;

  ngAfterViewInit(): void {
    const elements = document.querySelectorAll('.about-person');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach(el => observer.observe(el));
  }

  protected readonly artwork = artwork;
}

