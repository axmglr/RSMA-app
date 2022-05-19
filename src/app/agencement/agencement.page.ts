import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'agencement',
  templateUrl: './agencement.page.html',
  styleUrls: ['./agencement.page.scss'],
})
export class AgencementPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
