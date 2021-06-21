import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem, { IconMenuItem, menuItemVariants } from './MenuItems';
import DarkModeToggler from './DarkModeToggler';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function Menu({ menuOpen, setMenuOpen }) {
  const [listHover, setListHover] = useState(false);
  return (
    <motion.div
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: '100vh' },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
      className="cursor-pointer h-screen"
      onClick={() => (!listHover ? setMenuOpen(false) : setMenuOpen(true))}>
      <motion.ul
        initial="closed"
        animate="open"
        variants={variants}
        className="pt-40">
        <div
          className="mx-auto max-w-lg text-center"
          onMouseOver={() => {
            setListHover(true);
          }}
          onMouseOut={() => setListHover(false)}>
          <MenuItem href="/#about">About me</MenuItem>
          <MenuItem href="/#skills">Skills</MenuItem>
          <MenuItem href="/projects">Projects</MenuItem>
          <MenuItem href="/#contact">Contact</MenuItem>
          <MenuItem href="/julie-larsen_cv.pdf">View CV</MenuItem>{' '}
          <motion.div
            variants={menuItemVariants}
            className="block sm:hidden mx-auto my-6">
            <DarkModeToggler />
          </motion.div>
          <motion.ul className="mt-6 flex justify-center">
            <IconMenuItem href="https://github.com/juliebl">
              <FontAwesomeIcon className="h-4" icon={['fab', 'github']} />
              <p className="sr-only">Github Link</p>
            </IconMenuItem>
            <IconMenuItem href="https://www.linkedin.com/in/julie-larsen-364681190/">
              <FontAwesomeIcon className="h-4" icon={['fab', 'linkedin']} />
              <p className="sr-only">Linkedin Link</p>
            </IconMenuItem>
            <IconMenuItem href="https://discordapp.com/users/applecake#5502">
              <FontAwesomeIcon className="h-4" icon={['fab', 'discord']} />
              <p className="sr-only">Discord User Link</p>
            </IconMenuItem>
          </motion.ul>
        </div>
      </motion.ul>
    </motion.div>
  );
}

export default Menu;
