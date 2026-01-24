import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Initialization logic
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['scrollTo'] === 'jak-dzialamy') {
        setTimeout(() => {
          const el = document.getElementById('jak-dzialamy');
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  }
}

