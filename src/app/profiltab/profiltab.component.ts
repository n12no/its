import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-tab',
  templateUrl: './profiltab.component.html',
  styleUrls: ['./profiltab.component.scss'],
})
export class ProfilTabComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  ngOnInit() {

  }
  onLogOut() {
    this.authService.logoutUser().then( () => {
      this.router.navigateByUrl('');
      console.log(this.router.url);
    }).catch( (error) => {
      console.log(error);
    });

  }

}
