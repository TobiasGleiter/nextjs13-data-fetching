export default async function getPhotos(page: number) {
  // fake delay
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();

  return data.slice((page - 1) * 4, page * 4);
}
