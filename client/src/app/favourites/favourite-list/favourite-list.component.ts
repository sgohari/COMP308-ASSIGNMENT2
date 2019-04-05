import { Component, OnInit } from '@angular/core';
import { FavouriteListService } from 'src/app/services/favourite-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Route, Router } from '@angular/router';
import { Favourite } from 'src/app/models/favourite';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  favourites: Favourite[];

  constructor(
    private favouriteService: FavouriteListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit( ) {

    this.favourites = new Array<Favourite>();
    this.displayFavouriteList();

  }
  displayFavouriteList(): void {

    this.favouriteService.getList().subscribe(data=>{
      if(data.success){
        console.log(data);
        this.favourites=data.favouriteList;
      }else{
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    })

  }
}
