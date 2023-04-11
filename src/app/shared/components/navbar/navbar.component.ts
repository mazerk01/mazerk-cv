import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="todo container-fluid">
      home | about | projects | contact | selettore lingua (ita/eng)
    </div>
  `,
  styles: [
    `
    .todo {
      background-color: blue;
    }
    `
  ]
})
export class NavbarComponent {

}
