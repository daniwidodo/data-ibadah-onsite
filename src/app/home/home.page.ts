import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  endpoint = '';

  constructor( public httpClient: HttpClient, public router: Router) {

  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.httpClient.get( this.endpoint + 'api/ibadahs')
      .subscribe();

  }

  goToDetails(ibadahId){
    this.router.navigate(['data-jemaat-details', ibadahId]);
  }

}
