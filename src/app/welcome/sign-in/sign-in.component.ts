import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  regExpEmail: RegExp = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$');
  regExpPassword: RegExp = new RegExp('');
  signInForm: FormGroup;
  constructor(public router: Router, public formBuilder: FormBuilder, public authService: AuthenticationService) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(this.regExpEmail), Validators.required])],
      password: ['', Validators.compose([Validators.pattern(''), Validators.required])]
    });
  }

  ngOnInit() { }
  signIn() {
    this.authService.loginUser(this.signInForm.controls.email.value, this.signInForm.controls.password.value)
      .then(res => {
        console.log(res);
        console.log('Sign In' + this.authService.userDetails.name);
        this.router.navigateByUrl('/tabs');
      }, err => {
        console.log(err);
        console.log(err.message);
      });

  }
  onCancel() {
    this.signInForm.reset();
  }

}
