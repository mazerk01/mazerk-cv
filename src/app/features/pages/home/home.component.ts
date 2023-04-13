import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Navbar -->
    <div id="navbar" class="container-fluid">
      <app-navbar></app-navbar>
    </div>

    <!-- 100% wide until small breakpoint -->
    <div class="mt-2 container-sm">

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
      /* padding: 0; */
    }

    #navbar {
      box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.10);
    }

    .container-sm {
      background-color: #d9fffe;
    }
    `
  ]
})
export class HomeComponent {

}
