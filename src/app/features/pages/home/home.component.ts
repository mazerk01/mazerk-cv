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
    body {
      background-color: #d9fffe;
    }

    .container-fluid {
      padding: 0;
    }
    `
  ]
})
export class HomeComponent {

}
