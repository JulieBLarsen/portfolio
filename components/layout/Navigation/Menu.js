import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MenuItem from './MenuItem';

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
        className="flex mx-auto max-w-3xl flex-col justify-start items-center pt-10"
        onMouseOver={() => setListHover(true)}
        onMouseOut={() => setListHover(false)}>
        <MenuItem>About me</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Social</MenuItem>
      </motion.ul>
    </motion.div>
  );
}

export default Menu;
