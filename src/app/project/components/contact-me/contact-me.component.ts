import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  constructor(protected appTs:AppComponent) {}

  // ngAfterViewInit() {
  //   this.myMap();
  // }

  // myMap() {
  //   const mapProp = {
  //     center: new google.maps.LatLng(51.508742, -0.120850),
  //     zoom: 5,
  //   };
  //   const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  // }

}
