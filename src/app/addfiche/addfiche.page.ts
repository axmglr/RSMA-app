import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfiche',
  templateUrl: './addfiche.page.html',
  styleUrls: ['./addfiche.page.scss'],
})
export class AddfichePage implements OnInit {
  fileInput
  constructor() { }

  ngOnInit() {
  }
  addFiche() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY0NDc2NjY5LCJleHAiOjE2NjcwNjg2Njl9.Fgj0lXMp7OlBWai70B7LULB2I5yNl9gYZsf7zF8InyU");

    var formdata = new FormData();
    formdata.append("files", this.fileInput.files[0], "remise.png");
    formdata.append("data", "");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,

    };

    fetch("http://localhost:1337/api/upload/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })

      .catch(error => console.log('error', error));
  }
}
