import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="text-center m-10">
      <div className="mb-5 text-gray-500 flex justify-center">
        <a
          className="p-2 text-xl"
          aria-label="Github"
          href="https://github.com/juliebl">
          <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
        </a>
        <a
          className="p-2 text-xl"
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/julie-larsen-364681190/">
          <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
        </a>
        <a
          className="p-2 text-xl"
          aria-label="Discord user"
          href="https://discordapp.com/users/186410313820798976">
          <FontAwesomeIcon className="icon" icon={['fab', 'discord']} />
        </a>
      </div>

      <nav className="text-gray-500 mx-auto flex flex-wrap justify-center">
        <Link href="/">
          <a className="border-r border-gray-300 pl-4 pr-4 hover:text-gray-800">
            Home
          </a>
        </Link>
        <Link href="/#about">
          <a className="border-r border-gray-300 pl-4 pr-4 hover:text-gray-800">
            About
          </a>
        </Link>
        <Link href="/projects">
          <a className="border-r border-gray-300 pl-4 pr-4 hover:text-gray-800  active:bg-green-700">
            Projects
          </a>
        </Link>
        <Link href="/#contact">
          <a className="pl-4 hover:text-gray-800">Contact</a>
        </Link>
      </nav>
    </footer>
  )
}
