import { EmailService } from './email.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService: EmailService) { }

  resolve(route: ActivatedRouteSnapshot){
    const { id } = route.params;

    return this.emailService.getEmail(id);
  }
}
