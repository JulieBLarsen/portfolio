import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
  const [open, setOpen] = useState(false)
  let sideMenu
  if (open) {
    sideMenu = (
      <div className="sidemenu fixed inset-y-0 right-0 bg-purple-600  w-4/5 sm:w-2/5 lg:w-1/4 xl:w-1/5 flex flex-col items-center justify-between z-40">
        <div className="w-full">
          <p
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-white p-6 mt-0 font-6xl">
            <FontAwesomeIcon className="w-6" icon={faTimes} />
          </p>
          <div className=" flex flex-col items-center text-center">
            <Link href="/">
              <a>
                <img
                  className="ring-4 ring-purple-500 rounded-full"
                  src="/avatarxl.png"
                  alt=""
                />
              </a>
            </Link>
            <div className="flex flex-col justify-between">
              <Link href="/">
                <a className="mt-2 text-xl text-white">Julie Larsen</a>
              </Link>
              <p className="text-xs text-purple-300">
                juliebernadette@gmail.com
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col text-center items-center mt-12">
            <Link href="/">
              <a className="sidemenu__link">Home</a>
            </Link>
            <Link href="/#about">
              <a className="sidemenu__link">About</a>
            </Link>
            <Link href="/projects">
              <a className="sidemenu__link">Projects</a>
            </Link>
            <Link href="/#contact">
              <a className="sidemenu__link">Contact</a>
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-5 text-gray-500 flex justify-center">
            <a
              className="p-1 text-purple-200 hover:text-white text-xl"
              aria-label="Github"
              href="https://github.com/julieb">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
            </a>
            <a
              className="p-1 text-purple-200 hover:text-white text-xl"
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/julie-larsen-364681190/">
              <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
            </a>
            <a
              className="p-1 text-purple-200 hover:text-white text-xl"
              aria-label="Discord user"
              href="https://discordapp.com/users/186410313820798976">
              <FontAwesomeIcon className="icon" icon={['fab', 'discord']} />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <nav className="sidemenu pr-10 pt-10 flex justify-end items-start">
        <svg
          className="cursor-pointer"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          id="menu-icon"
          viewBox="0 0 100 80"
          width="40"
          height="40">
          <rect width="100" height="15" rx="8"></rect>
          <rect y="30" width="100" height="15" rx="8"></rect>
          <rect y="60" width="100" height="15" rx="8"></rect>
        </svg>
        {sideMenu}
      </nav>
    </>
  )
}
