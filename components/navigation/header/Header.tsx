'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export interface IHeader {}

const navigation = [
  { name: 'Home', href: '/', as: '/' },
  { name: 'Posts', href: '/posts', as: '/posts' },
  { name: 'Photos', href: '/photos', as: '/photos' },
];

const Header: React.FC<IHeader> = () => {
  let path = usePathname();

  return (
    <header className={`absolute top-0 left-0 w-screen z-20 py-3 lg:py-2 `}>
      <nav className="mx-auto flex max-w-7xl items-center justify-center px-4 lg:px-8 font-mono text-sm">
        <ul
          className={`flex gap-x-8 ${
            path === '/' ? 'text-white' : 'text-black dark:text-white'
          } text-semibold `}
        >
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} as={item.as} className="relative">
                {item.href === path && (
                  <span
                    // motion.span
                    //layoutId="underline"
                    className={`absolute top-full left-0 w-full ${
                      path === '/' ? 'bg-white' : 'bg-black dark:bg-white'
                    } h-[1px]`}
                  />
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
