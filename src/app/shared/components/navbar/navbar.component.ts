import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="todo container-fluid">
      <div class="row">
        <div class="col">
          <a>Home</a>
        </div>

        <div class="col">
          <a>About</a>
        </div>

        <div class="col">
          <a>Projects</a>
        </div>

        <div class="col">
          <a>Selettore Lingua</a>
        </div>

        <div class="col">
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
