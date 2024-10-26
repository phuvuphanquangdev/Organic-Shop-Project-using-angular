import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;
  
  constructor(private authService: AuthService) {
    this.signedin$ = authService.signedin$;
  }

  ngOnInit(){
    this.authService.checkAuth().subscribe(() => {});
  }

  
}
