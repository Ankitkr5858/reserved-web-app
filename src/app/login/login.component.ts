import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router"
import { ActivatedRoute } from "@angular/router"
import { error } from 'selenium-webdriver';
import { MatSnackBar } from "@angular/material/snack-bar"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string


  constructor(public auth: AngularFireAuth, private route:ActivatedRoute, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.auth.authState
      .subscribe((user) => {
        if(user != null){
          this.redirectToexplore()
        }
      })
  }

  login() {
    console.log(this.email, this.password)

    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then((user) => {
      if(user != null){
        this.goToItems()
      }
    })
    .catch(error => alert(error))
  }

  goToItems(): any {
    this.router.navigate(['/explore'], { relativeTo:this.route });
    this.snackbar.open("Successful", "Dismiss");
  }

  redirectToexplore(){
    this.router.navigate(['/explore'], { relativeTo:this.route });
  }

}
