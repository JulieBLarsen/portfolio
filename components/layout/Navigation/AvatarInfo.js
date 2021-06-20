import Link from 'next/link';
import { AvatarInfoMenuItem } from './MenuItems';
import { Menu, Transition } from '@headlessui/react';
import { CodeIcon } from '@heroicons/react/outline';

function AvatarInfo() {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button className="focus:outline-none">
            <img
              src="/logo_small.svg"
              alt="Cute icon of Julie Larsen"
              className="hover:animate-spin w-12 transition rounded-full"
            />
          </Menu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0">
            <Menu.Items
              as="div"
              static
              className="origin-top-right absolute left-0 w-60 rounded-md p-4 bg-white  shadow-sm focus:outline-none">
              <Menu.Item as="p" className="m-0 text-sm leading-relaxed">
                This website was built with{' '}
                <AvatarInfoMenuItem href="https://nextjs.org/">
                  Next.js
                </AvatarInfoMenuItem>
                ,{' '}
                <AvatarInfoMenuItem href="https://tailwindcss.com/">
                  Tailwind CSS
                </AvatarInfoMenuItem>{' '}
                and{' '}
                <AvatarInfoMenuItem href="https://strapi.io/">
                  Strapi
                </AvatarInfoMenuItem>
                .{' '}
              </Menu.Item>
              <Menu.Item as="p" className="mb-0">
                <Link href="https://github.com/juliebl/improved-portfolio">
                  <a className="flex justify-center items-center mb-0 text-sm text-center p-1 transition bg-gray-200 rounded-md hover:bg-purple-500 hover:text-white">
                    <CodeIcon className="w-4 mr-2 inline" />
                    See code
                  </a>
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default AvatarInfo;