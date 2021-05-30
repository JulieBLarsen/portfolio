import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function Navbar() {
  const [theme, setTheme] = useContext(ThemeContext);

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
    <nav className="fixed w-full py-0 z-40 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <img
          src="/logo_small.svg"
          alt="Cute icon of Julie Larsen"
          className="w-12"
        />
        <div className="flex justify-center items-center">
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
        </div>
        <p
          onClick={barbieMode}
          className="cursor-pointer font-bold text-rose-400">
          🌸 BARBIE MODE 💅
        </p>
        <p
          onClick={gothMode}
          className="cursor-pointer font-bold text-gray-900">
          🦇 GOTH MODE 🖤
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
