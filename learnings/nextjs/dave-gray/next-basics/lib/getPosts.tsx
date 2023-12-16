const getPosts = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) throw new Error('Failed to Fetch Posts');
  return res.json();
};

export default getPosts;
