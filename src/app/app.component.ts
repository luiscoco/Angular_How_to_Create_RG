// app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resourceGroupName = '';

  constructor(private http: HttpClient) {}

  executeEndpoint() {
    const url = `https://mynewfunctionluis1974.azurewebsites.net/api/HttpTrigger1?code=PIeNvNG0KeUvWu12oFMuMQ_bUKXDu_kNYJj0aG3LBSjKAzFu0Z0uuQ==&resourceGroupName=${this.resourceGroupName}`;
    this.http.get(url).subscribe(response => {
      console.log(response);
    });
  }
}
