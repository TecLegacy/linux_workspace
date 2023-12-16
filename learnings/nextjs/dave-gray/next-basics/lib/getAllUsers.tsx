export default async function getALlUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error('Fetching of resource failed');

  return res.json();
}
