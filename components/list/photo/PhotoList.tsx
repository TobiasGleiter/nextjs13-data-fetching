import Image from 'next/image';

export interface IPhotoList {
  promise: Promise<any>;
}

const PhotoList = async ({ promise }: IPhotoList) => {
  const photos = await promise;

  return (
    <div className="flex flex-col text-neutral-200">
      {photos.map((photo: any) => {
        return (
          <div
            key={photo.id}
            className="flex flex-col border-b border-white/20 mb-4 pb-2 pt-1"
          >
            <Image src={photo.url} alt="Loading..." width={100} height={100} />
            <div>
              <p className="text-base w-fit ml-2">{photo.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoList;
