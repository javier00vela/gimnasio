import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/utils/auth/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  constructor(private auth:AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  public logOut(){
  
    
    this.auth.logout(()=>{
      console.log("click event");
      this.router.navigate(["login"]);
    })
  }
}
