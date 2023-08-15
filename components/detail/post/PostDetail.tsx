import getUserName from '@/lib/users/getUserName';
import Link from 'next/link';

export interface IPostDetail {
  promise: Promise<any>;
}

const PostDetail = async ({ promise }: IPostDetail) => {
  const post = await promise;
  const userName = await getUserName(post.userId);

  return (
    <div className="flex flex-col text-neutral-300">
      <div>
        <p className="text-xs text-neutral-600">Title</p>
        <p className="text-base">{post.title}</p>
      </div>
      <div>
        <p className="text-xs text-neutral-600">Description</p>
        <p className="text-neutral-400">{post.body}</p>
      </div>
      <Link href={`/users/${post.userId}`} className="mt-4">
        <p className="text-xs text-neutral-600">Autor</p>
        <p className="text-neutral-400">{userName}</p>
      </Link>
    </div>
  );
};

export default PostDetail;
