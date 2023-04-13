import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Navbar -->
    <div class="container-fluid">
      <app-navbar></app-navbar>
    </div>

    <div class="container-sm">100% wide until small breakpoint</div>
  `,
  styles: [
    `
    .container-fluid {
      padding: 0;
    }

    .container-sm {
      background-color: #d9fffe;
    }
    `
  ]
})
export class HomeComponent {

}
