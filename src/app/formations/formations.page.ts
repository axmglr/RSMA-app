import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage {
  listFormation

  constructor(private menu: MenuController, public nav: NavController) {
    this.getListFormations()
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  getListFormations() {
    var requestOptions = {
      method: 'GET',

    };

    fetch("http://localhost:1337/api/formations", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.listFormation = result?.data
        console.log(this.listFormation)
      })
      .catch(error => console.log('error', error));
  }
  goFormation(id) {
    console.log(id);
    this.nav.navigateForward('fiche-formation', { state: id });
  }
}
