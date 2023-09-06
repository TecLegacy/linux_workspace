import { Loader } from '@googlemaps/js-api-loader';
import 'dotenv/config';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

const user = new User('female');
const company = new Company();
const googleMaps = new CustomMap({ lat: 29.7041, lng: 77.1025 });

googleMaps.setUserMarker({ currentPlace: 'Delhi', user: user });
// googleMaps.setCompanyMarker({ currentPlace: 'wow', user: company });
// googleMaps.setMarker({ currentPlace: 'wsow', user: company });
