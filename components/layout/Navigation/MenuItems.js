import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function MenuItem({ href, children }) {
  return (
    <Link href={href}>
      <a>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer p-2 py-4 text-lg font-medium hover:font-semibold hover:text-purple-600">
          {children}
        </motion.li>
      </a>
    </Link>
  );
}
export function IconMenuItem({ href, children }) {
  return (
    <Link href={href}>
      <a>
        <motion.li
          variants={variants}
          className="cursor-pointer px-2 text-lg font-medium hover:font-semibold hover:text-purple-600">
          {children}
        </motion.li>
      </a>
    </Link>
  );
}
export function AvatarInfoMenuItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="border-b-2 px-1 transition hover:bg-purple-500 hover:text-white border-purple-500">
        {children}
      </a>
    </Link>
  );
}
export function FooterMenuItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="py-1 px-4 text-sm hover:text-gray-800">{children}</a>
    </Link>
  );
}
