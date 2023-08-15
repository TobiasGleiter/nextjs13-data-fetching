import { IPhotoList } from './PhotoList';

const base: IPhotoList = {
  promise: Promise.resolve([]),
};

export const mockPhotoListProps = {
  base,
};
