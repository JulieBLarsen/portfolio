import { useContext, useState } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from './Menu';
import Menutoggle from './Menutoggle';
import DarkModeToggler from './DarkModeToggler';

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
  function barbieMode() {
    if (theme !== 'barbie') {
      setTheme('barbie');
      console.log(theme);
      document.documentElement.classList.replace('dark', 'barbie');
    }
  }

  return (
    <motion.nav
      className={`fixed w-full py-0 z-40 bg-white ${
        menuOpen ? 'bg-opacity-75' : ' bg-opacity-50'
      } backdrop-filter backdrop-blur-sm shadow-sm`}
      animate={menuOpen ? 'open' : 'closed'}>
      <div className="container mx-auto flex flex-row justify-between items-center">
        <img
          src="/logo_small.svg"
          alt="Cute icon of Julie Larsen"
          className="w-12"
        />
        {/*     <div className="flex justify-center items-center">
          <svg height="20" width="20">
            <circle
              cx="8"
              cy="8"
              r="8"
              className="fill-current cursor-pointer opacity-80 hover:opacity-100 text-pink-400"
            />
          </svg>
          <svg height="20" width="20">
            <circle
              cx="8"
              cy="8"
              r="8"
              className="fill-current cursor-pointer opacity-80 hover:opacity-100 text-green-400"
            />
          </svg>
          <svg height="20" width="20">
            <circle
              cx="8"
              cy="8"
              r="8"
              className="fill-current cursor-pointer opacity-80 hover:opacity-100 text-purple-400"
            />
          </svg>
          <svg height="20" width="20">
            <circle
              cx="8"
              cy="8"
              r="8"
              className="fill-current cursor-pointer opacity-80 hover:opacity-100 text-yellow-400"
            />
          </svg>
        </div> */}
        {/*         <p
          onClick={barbieMode}
          className="cursor-pointer font-bold text-rose-400">
          🌸 BARBIE MODE 💅
        </p>
        <p
          onClick={gothMode}
          className="cursor-pointer font-bold text-gray-900">
          🦇 GOTH MODE 🖤
        </p> */}
        <p className="text-sm font-semibold text-gray-800 uppercase">
          Julie Larsen
        </p>
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
