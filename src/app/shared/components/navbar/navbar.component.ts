import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="todo container-fluid">
      <div class="row justify-content-between">
        <div class="col-4 text-start">
          logo
        </div>

        <div class="col-4">
          <div class="d-flex justify-content-between">
            <a>Home</a>

            <a>About</a>

            <a>Projects</a>

            <a>Selettore Lingua</a>
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
    .todo {
      /* filter: drop-shadow(0px 0px 16px #363636); */
    }
    `
  ]
})
export class NavbarComponent {

}
