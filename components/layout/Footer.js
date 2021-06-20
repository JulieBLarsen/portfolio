import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterMenuItem, IconMenuItem } from './Navigation/MenuItems';
import FooterInfo from './Navigation/FooterInfo';

function Footer() {
  return (
    <footer className="text-center m-10">
      <ul className="mb-5 text-gray-500 flex justify-center">
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
      </ul>
      <nav className="text-gray-500 mx-auto flex flex-wrap justify-center sm:divide-x divide-gray-300">
        <FooterMenuItem href="/#about">About</FooterMenuItem>
        <FooterMenuItem href="/#skills">Skills</FooterMenuItem>
        <FooterMenuItem href="/projects">Projects</FooterMenuItem>
        <FooterMenuItem href="/#contact">Contact</FooterMenuItem>
        <FooterMenuItem href="/julie-larsen_cv.pdf">CV</FooterMenuItem>
        <FooterInfo />
      </nav>
    </footer>
  );
}
export default Footer;
