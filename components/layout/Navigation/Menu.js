import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem, { IconMenuItem } from './MenuItems';

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
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      className="cursor-pointer h-screen"
      onClick={() => (!listHover ? setMenuOpen(false) : setMenuOpen(true))}>
      <motion.ul
        initial="closed"
        animate="open"
        variants={variants}
        className="flex mx-auto max-w-3xl flex-col justify-start items-center pt-40"
        onMouseOver={() => setMenuOpen(false)}
        onMouseOver={() => setListHover(true)}
        onMouseOut={() => setListHover(false)}>
        <MenuItem href="/#about">About me</MenuItem>
        <MenuItem href="/#skills">Skills</MenuItem>
        <MenuItem href="/projects">Projects</MenuItem>
        <MenuItem href="/#contact">Contact</MenuItem>
        <MenuItem href="/julie-larsen_cv.pdf">View CV</MenuItem>
        <motion.ul variants={variants} className="mt-6 flex">
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
      </motion.ul>
    </motion.div>
  );
}

export default Menu;
