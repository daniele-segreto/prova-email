import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(userData).subscribe(
      (response) => {
        console.log(response);
        alert('User registered successfully. Please check your email to verify.');
      },
      (error) => {
        console.error(error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
