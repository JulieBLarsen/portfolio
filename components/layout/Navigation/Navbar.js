import { useContext, useState } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import AvatarInfo from './AvatarInfo';
import Menu from './Menu';
import Menutoggle from './Menutoggle';
import DarkModeToggler from './DarkModeToggler';
import Link from 'next/link';

function Navbar() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  if (menuOpen) {
    console.log('hell yass');
  }
  function gothMode() {
    if (theme !== 'dark') {
      setTheme('dark');
      console.log(theme);
      document.documentElement.classList.add('dark');
    }
  }

  return (
    <motion.nav
      className={`fixed w-full py-2 z-40 bg-white ${
        menuOpen ? 'bg-opacity-75' : ' bg-opacity-50'
      } backdrop-filter backdrop-blur-sm shadow-sm`}
      animate={menuOpen ? 'open' : 'closed'}>
      <div className="container mx-auto flex flex-row justify-between items-center">
        <AvatarInfo />
        <Link href="/">
          <a className="text-sm font-semibold text-gray-800 transition hover:text-purple-600 uppercase">
            Julie Larsen
          </a>
        </Link>
        <div className="flex">
          <DarkModeToggler />
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
