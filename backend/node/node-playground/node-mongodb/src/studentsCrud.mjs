import { connectToCluster } from './lib/mongo-conn.mjs';

export async function executeStudentCrudOperations() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
  } finally {
    await mongoClient.close();
  }
}
