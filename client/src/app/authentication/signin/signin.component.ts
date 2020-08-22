import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
  }

  onSubmit() {
    let loginCradential = { username: this.username, password: this.password };
    this.authenticationService.signin(loginCradential).subscribe({
      next: () => {
        console.log("The userConnected");
      },
      error: ({ error }) => {
        console.log(error);
      }
    });
  }
}
