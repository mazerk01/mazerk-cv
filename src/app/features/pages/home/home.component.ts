import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Navbar -->
    <div id="navbar" class="container-fluid py-4">
      <div class="row justify-content-between">
        <div class="col-4 text-start">
          logo
        </div>

        <div class="col-4">
          <div class="d-flex justify-content-between">
            <a class="fw-semibold fs-5 text-decoration-none text-dark" (click)="onClickScroll('homeAnchor')">Home</a>

            <a class="fw-semibold fs-5 text-decoration-none text-dark" (click)="onClickScroll('workAnchor')">Work</a>

            <a class="fw-semibold fs-5 text-decoration-none text-dark" (click)="onClickScroll('aboutAnchor')">About</a>

            <a class="fw-semibold fs-5 text-decoration-none text-dark">Selettore Lingua</a>
          </div>
        </div>

        <div class="col-4 text-end">
          <a>Contattami</a>
        </div>
      </div>
    </div>

    <!-- 100% wide until small breakpoint -->
    <div class="mt-2 container-sm">

      <!-- # Home -->
      <div>
        <div id="homeAnchor" class="container-fluid">
          <section>
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
                <div class="rocketBg rounded-5">
                  <div class="rocketGlass">
                    <img src="../assets/images/rocketGirl.png" alt="" width="900px">
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- # Work -->
      <div class="mt-3">
        <div id="workAnchor" class="container-fluid">
          <section>
            <div class="row">
              <!-- left column -->
              <div class="col">
                <table class="table">
                  <tbody>
                    <tr>Tecnologie utilizzate</tr>
                    <tr>lista di icone delle varie tecnologie, magari racchiuse da cards? suddivise per categorie?</tr>
                  </tbody>
                </table>
              </div>
              <!-- right column -->
              <div class="col">
                img
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- # About -->
      <div class="mt-3">
        <div id="aboutAnchor" class="container-fluid">
          <section>
            <div class="row">
              <!-- left column -->
              <div class="col">
                <table class="table">
                  <tbody>
                    <tr>About</tr>
                    <tr>sport, interessi</tr>
                  </tbody>
                </table>
              </div>
              <!-- right column -->
              <div class="col">
                img
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    html {
      scroll-behavior: smooth;
    }

    #navbar {
      box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.10);
    }

    section {
      height: 100vh;
    }

    .rocketBg {
      background: rgb(148,249,255);
      background: linear-gradient(175deg, rgba(148,249,255,1) 0%, rgba(122,227,255,1) 100%);
    }

    /* .rocketGlass {
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      background-color: rgba(255, 255, 255, 0.75);
      border-radius: 12px;
      border: 1px solid rgba(209, 213, 219, 0.3);
    } */
    `
  ]
})
export class HomeComponent {

  constructor ( private viewportScroller: ViewportScroller) {}

  onClickScroll(anchorId: string) {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

}
