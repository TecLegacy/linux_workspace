interface Coordinates {
  lat: number;
  lng: number;
}

export class CustomMap {
  coords: Coordinates;

  constructor(coords: Coordinates) {
    this.coords = coords;
  }

  public async location(): Promise<void> {
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;

    const map: google.maps.Map = new Map(
      document.getElementById('map') as HTMLElement,
      {
        center: this.coords,
        zoom: 8,
      }
    );
  }

  public async setMarker({
    currentPlace,
    lat,
    lng,
  }: {
    currentPlace: string;
    lat: number;
    lng: number;
  }): Promise<void> {
    const { Marker } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;

    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;

    const map = new Map(document.getElementById('map') as HTMLElement, {
      // Feed Delhi marker coordinates here
      center: this.coords,
      zoom: 8,
    });
    const mapMaker = new Marker({
      map,
      title: currentPlace,
      position: {
        lat,
        lng,
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
