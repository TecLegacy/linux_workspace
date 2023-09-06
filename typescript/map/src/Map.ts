import { Company } from './Company';
import { User } from './User';
interface Coordinates {
  lat: number;
  lng: number;
}

export class CustomMap {
  coords: Coordinates;

  constructor(coords: Coordinates) {
    this.coords = coords;
  }

  private async location(): Promise<google.maps.Map> {
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;
    return new Map(document.getElementById('map') as HTMLElement, {
      center: this.coords,
      zoom: 1,
    });
  }

  public async setUserMarker({
    currentPlace,
    user,
  }: {
    currentPlace: string;
    user: Coordinates;
  }): Promise<void> {
    const { Marker } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;

    const map = await this.location();
    const mapMaker = new Marker({
      map: map,
      title: currentPlace,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
}

// Maps API Initialization
// let map: google.maps.Map;
// (async () => {
//   const { Map } = (await google.maps.importLibrary(
//     'maps'
//   )) as google.maps.MapsLibrary;
//   map = new Map(document.getElementById('map') as HTMLElement, {
//     center: { lat: 28.7041, lng: 77.1025 },
//     zoom: 8,
//   });
// })();

// Maps API Marker

// let map;
// async function initMap(): Promise<void> {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };

//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = (await google.maps.importLibrary(
//     'maps'
//   )) as google.maps.MapsLibrary;
//   const { AdvancedMarkerElement } = (await google.maps.importLibrary(
//     'marker'
//   )) as google.maps.MarkerLibrary;

//   // The map, centered at Uluru
//   map = new Map(document.getElementById('map') as HTMLElement, {
//     zoom: 4,
//     center: position,
//     mapId: 'DEMO_MAP_ID',
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: { lat: 28.7041, lng: 77.1025 },
//     title: 'Uluru',
//   });
// }

// initMap();
