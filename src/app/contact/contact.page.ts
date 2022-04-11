import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {

  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
