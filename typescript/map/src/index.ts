import { Loader } from '@googlemaps/js-api-loader';
import 'dotenv/config';
import { User } from './User';
import { Company } from './Company';

// Maps API Initialization
let map: google.maps.Map;
(async () => {
  const { Map } = (await google.maps.importLibrary(
    'maps'
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById('map') as HTMLElement, {
    center: { lat: 28.7041, lng: 77.1025 },
    zoom: 8,
  });
})();

// async function initMap(): Promise<void> {
//   const { Map } = (await google.maps.importLibrary(
//     'maps'
//   )) as google.maps.MapsLibrary;
//   map = new Map(document.getElementById('map') as HTMLElement, {
//     center: { lat: 28.7041, lng: 77.1025 },
//     zoom: 8,
//   });
// }
// initMap();

const user = new User('male');
console.log(user.name);
console.log(user.location);

const company = new Company();
console.log(company.companyName);
console.log(company.catchPhrase);
console.log(company.location);
