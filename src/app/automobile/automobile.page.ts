import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'automobile',
  templateUrl: './automobile.page.html',
  styleUrls: ['./automobile.page.scss'],
})
export class AutomobilePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}