import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { motion } from 'framer-motion';

function DarkModeToggler() {
  const [darkMode, setDarkMode] = useState(false);
  const className = `w-40 h-12 cursor-pointer rounded-full p-1 flex items-center ${
    darkMode ? 'bg-green-200 justify-end' : 'bg-red-600 justify-start'
  }`;
  return (
    /*     <motion.div
      animate
      className={className}
      onClick={() => setDarkMode(!darkMode)}>
      <motion.div
        animate
        className="bg-blue-400 h-10 w-10 rounded-full"></motion.div>
    </motion.div> */
    <motion.div
      animate
      className={`h-10 w-10 cursor-pointer flex items-center justify-center rounded-full ${
        darkMode ? 'bg-gray-600' : 'bg-purple-200'
      }`}
      onClick={() => setDarkMode(!darkMode)}>
      {!darkMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <SunIcon className="h-6 w-6 text-purple-600" />
        </motion.div>
      )}
      {darkMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <MoonIcon className="h-6 w-6 text-white" />
        </motion.div>
      )}
    </motion.div>
    /*     <div className="mr-6 p-1 cursor-pointer rounded-full transition hover:text-white hover:bg-purple-600">
      <MoonIcon className="h-6 w-6" />
    </div> */
  );
}

export default DarkModeToggler;
