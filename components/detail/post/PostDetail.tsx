export interface IPostDetail {
  promise: Promise<any>;
}

const PostDetail = async ({ promise }: IPostDetail) => {
  const post = await promise;

  return (
    <div className="flex flex-col">
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
