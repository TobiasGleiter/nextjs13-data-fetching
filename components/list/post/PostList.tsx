import Link from 'next/link';

export interface IPostList {
  promise: Promise<any>;
}

const PostList = async ({ promise }: IPostList) => {
  const posts = await promise;
  const fetchUserName = async (userId: number) => {
    // Make an API call to fetch the user's name based on userId
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();
    return user.name;
  };

  const updatedPosts = await Promise.all(
    posts.map(async (post: any) => {
      const userName = await fetchUserName(post.userId);
      return { ...post, userName };
    })
  );

  return (
    <div className="flex flex-col">
      {updatedPosts.map((post: any) => {
        return (
          <div
            key={post.id}
            className="flex flex-col border-b border-white/20 mb-4 pb-2 pt-1"
          >
            <Link
              href={`/posts/${post.id}`}
              className="text-base hover:underline underline-offset-2 w-fit"
            >
              {post.title}
            </Link>
            <Link
              href={`/users/${post.userId}`}
              className="text-neutral-200 hover:underline underline-offset-2 w-fit"
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
