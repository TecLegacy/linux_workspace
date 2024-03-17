import { config } from 'dotenv';

import { executeStudentCrudOperations } from './studentsCrud.mjs';

config();

//Connection to DB
(async () => {
  await executeStudentCrudOperations();
})();
