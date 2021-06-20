import Link from 'next/link';

export function Button({ children, href }) {
  return (
    <Link href={href}>
      <a
        className="cursor-pointer flex flex-none flex-row items-center justify-center transition mr-4 py-2 px-5 text-sm font-medium rounded-md text-white bg-purple-600 shadow leading-loose no-underline hover:bg-purple-500 hover:text-white hover:shadow-lg focus:shadow-none focus:bg-purple-600 focus:outline-none active:bg-purple-700 active:shadow-none
">
        {children}
      </a>
    </Link>
  );
}

export function LightButton({ children, href }) {
  return (
    <Link href={href}>
      <a
        className="cursor-pointer flex flex-none flex-row items-center justify-center mr-4 py-2 px-5 bg-white transition text-gray-700 shadow leading-loose no-underline  text-sm font-medium rounded-md hover:bg-purple-600 hover:text-white
">
        {children}
      </a>
    </Link>
  );
}
