import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.page.html',
  styleUrls: ['./entreprises.page.scss'],
})
export class EntreprisesPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}


