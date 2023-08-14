import PostDetail from '@/components/detail/post/PostDetail';
import getPost from '@/lib/posts/getPost';
import { Suspense } from 'react';

export interface IPost {
  params: { id: number };
}

export default async function Post({ params: { id } }: IPost) {
  const post = getPost(id);

  return (
    <>
      <Suspense fallback="Loading...">
        {/* @ts-expect-error Server Component */}
        <PostDetail promise={post} />
      </Suspense>
    </>
  );
}
