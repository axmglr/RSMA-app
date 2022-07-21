import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  username
  LastName
  email
  password
  remdp
  token


  constructor( private alertCtrl:AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  inscription(){
    console.log(this.email, this.password)
   console.log(this.LastName, this.username)
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "username": this.username,
    "email": this.email,
    "password": this.password,
    "LastName": this.LastName
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };
  
  fetch("http://localhost:1337/api/auth/local/register", requestOptions)
    .then(response => response.json())
    .then((result) => {console.log(result)
    this.token = result
  if (this.token.jwt){
  
  this.showAlert()
}
else{
  this.showAlertfaux()
}
  })
    .catch(error => console.log('error', error),
    );
  }

  
async showAlert() {
  this.router.navigate(['/home'])
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Inscription réussite !',
      subHeader: '',
      message: 'Nous vous contacterons dans les plus brefs délais.',
      buttons: ['Ok']
     });

    await alert.present();
  }

  async showAlertfaux() {
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Echec de l\'inscription',
        subHeader: '',
        message: 'Il semble que quelque chose ce soit mal passé.',
        buttons: ['Réessayer']
       });
  
      await alert.present();
    }
}