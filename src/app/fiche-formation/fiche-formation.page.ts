import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fiche-formation',
  templateUrl: './fiche-formation.page.html',
  styleUrls: ['./fiche-formation.page.scss'],
})
export class FicheFormationPage {

  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
