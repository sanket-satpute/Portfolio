import { Component } from '@angular/core';
import { environment } from '../../../../../enviroments/enviroment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  apiLoaded = false;

  center: google.maps.LatLngLiteral = { lat: 20.0124, lng: 79.1165 };
  zoom = 14;

  constructor() {
    // Load the Google Maps API
    this.loadGoogleMapsApi();
  }

  loadGoogleMapsApi() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=maps,marker`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    script.onload = () => {
      this.apiLoaded = true;
    };
  }
}
