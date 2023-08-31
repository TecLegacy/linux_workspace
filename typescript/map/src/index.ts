import { Loader } from '@googlemaps/js-api-loader';
import 'dotenv/config';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

const googleMaps = new CustomMap({ lat: 29.7041, lng: 77.1025 });
googleMaps.setMarker({ currentPlace: 'Delhi', lat: 29.7041, lng: 77.1025 });
