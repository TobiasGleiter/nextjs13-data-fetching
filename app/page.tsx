import Link from 'next/link';

export default async function Home() {
  return (
    <main>
      <h1 className="text-lg mb-4">
        This website focuses on data fetching in Next.js 13. Additionally, I
        have tested pagination loading for photos.
      </h1>
      <div className="space-y-2">
        <Link href="/posts">Next.js 13 data fetching server side</Link>
        <Link href="/photos">Client Side pagination loading</Link>
      </div>
    </main>
  );
}
