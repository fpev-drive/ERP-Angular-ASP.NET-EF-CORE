import { LanguageService } from './../_services/language.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

  constructor(public languageService: LanguageService, private router: Router, private authService: AuthService) { }

  changeLang(lang: string) {
    this.languageService.changeLang(lang);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }
}
