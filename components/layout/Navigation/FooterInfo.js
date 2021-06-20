import Link from 'next/link';
import { AvatarInfoMenuItem } from './MenuItems';
import { Menu, Transition } from '@headlessui/react';
import { CodeIcon } from '@heroicons/react/outline';

function FooterInfo() {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom=" opacity-0"
            enterTo=" opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom=" opacity-100"
            leaveTo=" opacity-0">
            <Menu.Items
              as="div"
              static
              className="inset-x-0 bottom-9 mx-auto absolute w-60 rounded-md p-4 bg-white shadow-sm focus:outline-none text-left">
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
          <Menu.Button
            as="p"
            className="focus:outline-none cursor-pointer px-4 py-1 m-0 text-sm text-gray-500 hover:text-gray-800">
            <CodeIcon className="w-4 mr-2 inline" />
          </Menu.Button>
        </>
      )}
    </Menu>
  );
}

export default FooterInfo;
