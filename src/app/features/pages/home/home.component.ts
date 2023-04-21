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

    <div class="container-fluid p-0">

      <!-- # Home -->
      <div id="bgHome" class="container-fluid">
        <section id="homeAnchor">
          <div class="row">
            <div class="col">
              <table class="mt-4 table table-borderless bg-white rounded-3" style="width: 50%;">
                <tbody>
                  <tr class="fs-5">Hi, I'm</tr>
                  <tr class="fs-2 fw-bold">WILLY ANDREA MARTINEZ</tr>
                  <tr class="fs-3 fw-medium">ANALYST PROGRAMMER</tr>
                  <tr class="fs-5">Bottone per scaricare il file</tr>
                  <tr class="fs-5">LinkedIn + GitHub</tr>
                </tbody>
              </table>
            </div>

            <div class="col">
              <div id="homeRightCol" class="container-sm">
                <div class="row">
                  <div class="col">
                    <div class="rocketBg rounded-5">
                      <div class="rocketGlass">
                        <img src="/assets/images/home.png" alt="" width="600px">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- # Work -->
      <div class="mt-3">
        <div id="workAnchor" class="container-sm">
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
        <div id="aboutAnchor" class="container-sm">
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

    #bgHome {
      background: #5352ed;
    }

    #homeRightCol {
      /* background-image: url("/assets/images/modern.jpg"); */
    }

    .rocketBg {
      /* background-image: url("/assets/images/blobHome.svg"); */
    }

    /* .rocketGlass {
      width: 60%;
      margin-left: 9.6em;
      background: rgba( 255, 255, 255, 0.25 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 10px );
      -webkit-backdrop-filter: blur( 10px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
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
