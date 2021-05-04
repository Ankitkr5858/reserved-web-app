import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  current_user: any;

  constructor(public auth: AngularFireAuth, private snackbar: MatSnackBar, private router: Router, private route:ActivatedRoute) { }

  logout(){
    this.auth.signOut()
    .then(() => {
      this.snackbar.open("Logged out, You need to be logged in to upload!", "Dismiss");
      this.goToItems();
    })


  }

  ngOnInit(): void { 
    this.auth.authState
      .subscribe((user) =>{
        if(user){
          this.current_user = user
        }
      });
  }


  goToItems(): any {
    this.router.navigate(['/explore'], { relativeTo:this.route });
  }
}
