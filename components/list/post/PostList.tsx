import getUserName from '@/lib/users/getUserName';
import Link from 'next/link';

export interface IPostList {
  promise: Promise<any>;
}

const PostList = async ({ promise }: IPostList) => {
  const posts = await promise;

  const updatedPosts = await Promise.all(
    posts.map(async (post: any) => {
      const userName = await getUserName(post.userId);
      return { ...post, userName };
    })
  );

  return (
    <div className="flex flex-col text-neutral-200 divide-y-[0.5px] divide-neutral-400 ">
      {updatedPosts.map((post: any) => {
        return (
          <div key={post.id} className="flex flex-col mb-4 pb-2 pt-1">
            <Link
              href={`/posts/${post.id}`}
              className="text-base hover:underline underline-offset-2 w-fit"
            >
              {post.title}
            </Link>
            <Link
              href={`/users/${post.userId}`}
              className="text-neutral-500 hover:underline underline-offset-2 w-fit"
            >
              {post.userName}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
