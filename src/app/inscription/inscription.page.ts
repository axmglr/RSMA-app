import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  userName
  email
  mdp
  remdp
  token

  constructor(private router: Router) { }

  ngOnInit() {
  }

  inscription(){
    console.log(this.email, this.mdp)
   console.log(this.remdp, this.userName)
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "username": this.userName,
    "email": this.email,
    "password": this.mdp
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
    this.navigate()
  }
  })
    .catch(error => console.log('error', error));
  }
  
  navigate(){
    this.router.navigate(['/home'])
  }

}
