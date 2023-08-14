import { IPostList } from './PostList';

const base: IPostList = {
  promise: Promise.resolve([]),
};

export const mockPostListProps = {
  base,
};
