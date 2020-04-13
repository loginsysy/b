import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = 'georgemunene';
  private client_id = '49728768';
  private client_secret = 'MDQ6VXNlcjQ5NzI4NzY4';

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "/repos" +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}
