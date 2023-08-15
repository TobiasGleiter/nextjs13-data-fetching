'use client';

import getPhotos from '@/lib/photos/getPhotos';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

export default function Photos() {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['query'],
    async ({ pageParam = 1 }) => {
      const res = await getPhotos(pageParam);
      return res;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );

  return (
    <>
      <div className="border border-yellow-400 rounded-lg p-2 mb-4">
        <h1>
          This is a {'"use client"'} page featuring dynamic pagination loading.
          The initial loading displays four objects, with the option to fetch an
          additional four objects afterwards.
        </h1>
        <p>
          Inspired by:{' '}
          <Link
            href="https://www.youtube.com/watch?v=R1FG54FY-18&t=385s"
            className="hover:underline underline-offset-4"
            target="_blank"
          >
            Josh tried coding
          </Link>
        </p>
      </div>
      <h2 className="text-xl">Photos</h2>
      <div>
        {data?.pages.map((page, i) => {
          return (
            <div key={i}>
              {page.map((photo: any) => {
                return (
                  <div
                    key={photo.id}
                    className="flex flex-row border-b border-white/20 mb-4 pb-2 pt-1"
                  >
                    <Image
                      src={photo.url}
                      alt={photo.title}
                      width={100}
                      height={100}
                    />
                    <div className="ml-2">
                      <p>{photo.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="border mt-4 rounded px-10 w-fit hover:bg-white hover:text-black duration-200"
        >
          {isFetchingNextPage ? 'Loading more' : 'Load more'}
        </button>
      </div>
    </>
  );
}
