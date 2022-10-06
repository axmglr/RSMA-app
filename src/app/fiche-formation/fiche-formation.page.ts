import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fiche-formation',
  templateUrl: './fiche-formation.page.html',
  styleUrls: ['./fiche-formation.page.scss'],
})
export class FicheFormationPage {
  formation: any;
  idFormation: any
  constructor(private menu: MenuController, public router: Router) {
    if (router.getCurrentNavigation().extras.state) {
      this.idFormation = this.router.getCurrentNavigation().extras.state;
      console.log(this.idFormation)
      this.getListFormations(this.idFormation)
    }
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  getListFormations(id) {
    var requestOptions = {
      method: 'GET',

    };

    fetch("http://localhost:1337/api/formations/" + id + "?populate=*", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.formation = result.data
        console.log(this.formation)
      })
      .catch(error => console.log('error', error));
  }
  postuler() {

  }
}
