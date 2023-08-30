import 'dotenv/config';
import { User } from './User';
import { Company } from './Company';

const user = new User('male');
console.log(user.name);
console.log(user.location);

const company = new Company();
console.log(company.companyName);
console.log(company.catchPhrase);
console.log(company.location);

console.log(process.env.GOOGLE_API_MAPS_KEY);
