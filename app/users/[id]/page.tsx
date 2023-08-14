import getUserPosts from '@/lib/users/getUserPosts';
import { Suspense } from 'react';

export interface IUser {
  params: { id: any };
}

export default async function User({ params: { id } }: IUser) {
  const userPosts = getUserPosts(id);

  return (
    <div>
      <h1>User Posts</h1>
      <Suspense fallback="Loading..."></Suspense>
    </div>
  );
}
