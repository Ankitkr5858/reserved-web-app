import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(public auth: AngularFireAuth, private router: Router, private route:ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.auth.authState
      .subscribe((user) => console.log(user));
  }

  signUp() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(res => console.log(res), this.goToItems())
    .catch(error => console.log(error.code))
  }

  goToItems(): any {
    this.router.navigate(['/login'], { relativeTo:this.route });
    this.snackbar.open("Successful Sign Up, please Login", "Dismiss");
  }

}
