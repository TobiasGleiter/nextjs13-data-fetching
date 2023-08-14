export default async function getPosts(id: number) {
  // fake delay
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
