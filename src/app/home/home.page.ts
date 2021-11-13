import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  endpoint = 'https://panelv1.gkisulsel.org/public/api/ibadahs';
  ibadahName: any;
  dataJemaat: any;
  jumlahJemaat: any;

  constructor( public httpClient: HttpClient, public router: Router) {

  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllIbadah();

  }

  goToDetails(ibadahId){
    this.router.navigate(['data-jemaat-details', ibadahId]);
  }

  getAllIbadah()
  {
    this.httpClient.get( this.endpoint )
    .subscribe( data => {

      const dataIbadah: any = data;
      this.ibadahName = dataIbadah.data.namaIbadah;
      this.jumlahJemaat = dataIbadah.data.jemaat.length;
      this.dataJemaat = dataIbadah.data.jemaat;

      ////
      console.log(data);
      console.log('ibadah name :', this.ibadahName);
      console.log('jumlah Jemaat :', this.jumlahJemaat);
      console.log('data jemaat :', this.dataJemaat);
    });
  }

}
