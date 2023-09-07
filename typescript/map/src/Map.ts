import { Company } from './Company';
import { User } from './User';

interface Coordinates {
  lat: number;
  lng: number;
}

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private map: google.maps.Map; // Store the map instance as a class property

  constructor(private coords: Coordinates) {
    this.initializeMap();
  }

  private async initializeMap(): Promise<void> {
    // const { Map } = google.maps;
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;

    this.map = new Map(document.getElementById('map') as HTMLElement, {
      center: this.coords,
      zoom: 1, // You can set the default zoom level here
    });
  }

  public async setUserMarker({
    currentPlace,
    user,
  }: {
    currentPlace: string;
    user: Coordinates;
  }): Promise<void> {
    // const { Marker } = google.maps;
    const { Marker } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;
    new Marker({
      map: this.map, // Use the same map instance
      title: currentPlace,
      position: {
        lat: user.lat,
        lng: user.lng,
      },
    });
  }

  public async setCompanyMarker({
    currentPlace,
    company,
  }: {
    currentPlace: string;
    company: Company;
  }) {
    // const { Marker } = google.maps;
    const { Marker } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;
    const marker = new Marker({
      map: this.map, // Use the same map instance
      title: currentPlace,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });

    //INFO WINDOW
    const infoWindow = new google.maps.InfoWindow({
      content: '<h1>Company Name</h1>',
      ariaLabel: 'Company Name',
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  // Generic User and Company marker
  public async marker({
    currentPlace,
    mappable,
  }: {
    currentPlace: string;
    mappable: Mappable;
  }) {
    // const { Marker } = google.maps;
    const { Marker } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;
    new Marker({
      map: this.map, // Use the same map instance
      title: currentPlace,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
