import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colproj';
constructor(private router: Router, public service:AuthService){}


  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
