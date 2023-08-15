export default async function getPhoto(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();

  return data;
}
