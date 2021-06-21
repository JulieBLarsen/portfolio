import { useContext, useState } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AvatarInfo from './AvatarInfo';
import Menu from './Menu';
import Menutoggle from './Menutoggle';
import DarkModeToggler from './DarkModeToggler';
import Link from 'next/link';

function Navbar() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function gothMode() {
    if (theme !== 'dark') {
      setTheme('dark');
      console.log(theme);
      document.documentElement.classList.add('dark');
    }
  }

  return (
    <motion.nav
      className={`fixed w-full py-2 px-4 z-40 bg-white ${
        menuOpen ? 'bg-opacity-90' : ' bg-opacity-70'
      } backdrop-filter backdrop-blur-sm shadow-sm`}
      animate={menuOpen ? 'open' : 'closed'}>
      <div className="container mx-auto flex flex-row justify-between items-center">
        {/* add width to make same width as darkmodetoggler + menuicon so center is centered */}
        <div className=" sm:w-[79px]">
          <div className="relative w-12 h-12">
            <Link href="/">
              <Image
                src="/logo_small.svg"
                alt="Cute icon of Julie Larsen"
                layout="fill"
                className="cursor-pointer object-cover object-center rounded-t-md hover:animate-spin w-12 transition"
              />
            </Link>
          </div>
        </div>

        {/*  <AvatarInfo /> */}
        <Link href="/">
          <a className="text-sm font-semibold text-gray-800 transition hover:text-purple-600 uppercase">
            Julie Larsen
          </a>
        </Link>
        <div className="flex">
          <div className="hidden mr-4 sm:block">
            <DarkModeToggler />
          </div>
          <Menutoggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
