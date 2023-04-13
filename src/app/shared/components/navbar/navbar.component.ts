import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container-fluid py-4">
      <div class="row justify-content-between">
        <div class="col-4 text-start">
          logo
        </div>

        <div class="col-4">
          <div class="d-flex justify-content-between">
            <a class="fw-semibold fs-5 text-decoration-none text-dark">Home</a>

            <a class="fw-semibold fs-5 text-decoration-none text-dark">Work</a>

            <a class="fw-semibold fs-5 text-decoration-none text-dark">About</a>

            <a class="fw-semibold fs-5 text-decoration-none text-dark">Selettore Lingua</a>
          </div>
        </div>

        <div class="col-4 text-end">
          <a>Contattami</a>
        </div>
      </div>

    </div>
  `,
  styles: [
    `
    `
  ]
})
export class NavbarComponent {

}
