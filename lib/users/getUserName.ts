export default async function getUsers(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const user = await res.json();
  return user.name;
}
