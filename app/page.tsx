import PostList from '@/components/list/post/PostList';
import getPosts from '@/lib/posts/getPosts';
import { Suspense } from 'react';

export default async function Home() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12  lg:px-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <Suspense fallback="Loading...">
          {/* @ts-expect-error Server Component */}
          <PostList promise={posts} />
        </Suspense>
      </div>
    </main>
  );
}
