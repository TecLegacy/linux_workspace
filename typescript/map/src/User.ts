import { faker } from '@faker-js/faker';

export class User {
  // Type Declaration
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(gender: 'male' | 'female') {
    // Type initialization
    this.name = faker.person.fullName({ sex: gender });
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
