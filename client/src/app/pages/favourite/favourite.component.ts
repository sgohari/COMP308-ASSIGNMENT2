import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent extends BasePageComponent implements OnInit {

  constructor(
    route:ActivatedRoute,
    private authService: AuthService

  ) {
    super(route);
   }

  ngOnInit() {
  }
  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
