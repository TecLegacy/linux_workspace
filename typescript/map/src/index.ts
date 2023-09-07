import 'dotenv/config';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

const user = new User('female');
const company = new Company();
const googleMaps = new CustomMap({ lat: 0, lng: 0 });

googleMaps.setUserMarker({ currentPlace: 'Delhi', user: user.location });

googleMaps.setCompanyMarker({
  currentPlace: 'wow',
  company: company,
});
