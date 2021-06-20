import IllustratedAvatar from '../layout/IllustratedAvatar';
import { motion } from 'framer-motion';

function Header() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };

  const variant = {
    show: {
      y: 0,
      opacity: 1,
      transition: {},
    },
    hidden: {
      y: 10,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative container max-w-4xl h-screen mx-auto flex flex-col gap-5 justify-center">
      <motion.div variants={variant} className="h-44 relative">
        <IllustratedAvatar />
      </motion.div>

      <motion.h1
        variants={variant}
        className="mt-10 text-3xl sm:text-6xl font-bold text-center text-gray-900">
        Hi! I'm Julie,
      </motion.h1>
      <motion.h2
        variants={variant}
        className="text-2xl sm:text-4xl text-center leading-tight text-purple-600">
        a front-end web developer.
      </motion.h2>
      {/*       <motion.p
        variants={variant}
        className="text-xl font-medium text-gray-800 mt-6 md:text-center leading-relaxed">
        I'm currently looking for work in the Stavanger area
      </motion.p> */}
    </motion.div>
  );
}

export default Header;
