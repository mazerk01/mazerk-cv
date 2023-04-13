import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Navbar -->
    <div class="container-fluid">
      <app-navbar></app-navbar>
    </div>

    <div class="container-sm">
      <!-- 100% wide until small breakpoint -->

      <!-- # Home -->
      <div>
        <div class="container-fluid">
          <div class="row">
            <!-- left column -->
            <div class="col">

              <table class="table">
                <tbody>
                  <tr>Hi, I'm</tr>
                  <tr>Giorgio Emilio Gaviria</tr>
                  <tr>Analyst Programmer</tr>
                  <tr>Bottone per scaricare il file</tr>
                  <tr>LinkedIn + GitHub</tr>
                </tbody>
              </table>
            </div>

            <!-- right column -->
            <div class="col">
              img
            </div>
          </div>
        </div>
      </div>
    </div>
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
