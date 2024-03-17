import { connectToCluster } from './lib/mongo-conn.mjs';

export async function executeStudentCrudOperations() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);

    const db = mongoClient.db('school');
    const collection = db.collection('students');
    // console.log('CREATE Student');
    // await createStudentDocument(collection);

    console.log(await findStudentsByName(collection, 'keshav'));

    console.log("UPDATE Student's Birthdate");
    await updateStudentsByName(collection, 'keshav', {
      birthdate: new Date(2001, 7, 7),
    });
    console.log(await findStudentsByName(collection, 'keshav'));

    console.log('DELETE Student');
    await deleteStudentsByName(collection, 'John Smith');
    console.log(await findStudentsByName(collection, 'John Smith'));
  } finally {
    await mongoClient.close();
  }
}

// Create a student Document
export async function createStudentDocument(collection) {
  const studentDocument = {
    name: 'keshav',
    birthdate: new Date(2000, 11, 22),
    address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' },
  };

  await collection.insertOne(studentDocument);
}

// Find Document
export async function findStudentsByName(collection, name) {
  return collection.find({ name }).toArray();
}

//Update Document
export async function updateStudentsByName(collection, name, updatedFields) {
  await collection.updateMany({ name }, { $set: updatedFields });
}

// Delete Many
export async function deleteStudentsByName(collection, name) {
  await collection.deleteMany({ name });
}
