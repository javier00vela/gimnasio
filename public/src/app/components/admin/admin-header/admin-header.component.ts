import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/utils/auth/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private auth:AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.auth.logout(()=>{
      this.router.navigate(["login"]);
    })
  }

}
