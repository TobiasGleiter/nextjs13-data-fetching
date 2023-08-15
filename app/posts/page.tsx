import PostList from '@/components/list/post/PostList';
import getPosts from '@/lib/posts/getPosts';
import { Suspense } from 'react';

export default async function Posts() {
  const posts = getPosts();

  return (
    <>
      <div className="border border-yellow-400 rounded-lg p-2 mb-4">
        Fetching Data with Next.js 13 on Server-side, displaying Loading with
        React Suspense while Loading the Promise in the PostList Component.
      </div>
      <h1 className="text-xl">Posts</h1>
      <Suspense fallback="Loading...">
        {/* @ts-expect-error Server Component */}
        <PostList promise={posts} />
      </Suspense>
    </>
  );
}
