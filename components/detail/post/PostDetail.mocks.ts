import { IPostDetail } from './PostDetail';

const base: IPostDetail = {
  promise: Promise.resolve([]),
};

export const mockPostDetailProps = {
  base,
};
