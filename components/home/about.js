import Link from 'next/link';
import Menu from '../Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
  return (
    <section
      id="about"
      className="lg:max-h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-2">
      <img
        className="about__picture max-h-screen h-2/5 w-full lg:h-full object-top object-cover"
        src="/images/julie.jpg"
        alt=""
      />
      <div>
        <Menu></Menu>
        <div className="lg:max-h-screen p-8 lg:p-10 pt-0 lg:overflow-y-auto flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold md:text-left text-gray-900">
              <span className="block md:text-6xl">Hi! I'm Julie,</span>
              <span className="text-3xl md:text-4xl leading-tight text-purple-600">
                a front-end web developer.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              I live in Stavanger, Norway and I'm currently studying at Noroff
              School of technology and digital media, getting a degree in
              Front-end development. I'll have completed my education in the
              beginning of June 2021 and will be looking for an internship or
              junior level job.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              I am passionate about learning new technology and challenging
              myself which is why web development is appealing to me.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Take a look at my{' '}
              <Link href="/projects">
                <a className="font-bold hover:underline">projects</a>
              </Link>{' '}
              and don't be afraid to contact me 😊
            </p>
          </div>
          <div className="py-6">
            <button
              className="btn btn-light mr-6"
              aria-label="Github link"
              href="https://github.com/julieb">
              <FontAwesomeIcon className="mr-2 icon" icon={['fab', 'github']} />
              Github
            </button>
            <button
              className="btn btn-light"
              aria-label="Linkedin link"
              href="https://www.linkedin.com/in/julie-larsen-364681190/">
              <FontAwesomeIcon
                className="mr-2 icon"
                icon={['fab', 'linkedin']}
              />
              Linkedin
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
            <div>
              <h2 className="text-lg font-semibold">Design</h2>
              <ul className="text-gray-700">
                <li className="border-b border-gray-300 pt-2 pb-2">
                  Adobe Photoshop
                </li>
                <li className="border-b border-gray-300 pt-2 pb-2">
                  Adobe illustrator
                </li>
                <li className="border-b border-gray-300 pt-2 pb-2">Adobe XD</li>
                <li className="border-b border-gray-300 pt-2 pb-2">Webflow</li>
                <li className=" pt-2 pb-2">WCAG</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Coding</h2>
              <ul className="text-gray-700">
                <li className="border-b border-gray-300 pt-2 pb-2">
                  HTML 5 & CSS 3
                </li>
                <li className="border-b border-gray-300 pt-2 pb-2">
                  Sass/SCSS
                </li>
                <li className="border-b border-gray-300 pt-2 pb-2">
                  Javascript & NPM
                </li>
                <li className="border-b border-gray-300 pt-2 pb-2">React</li>
                <li className="pt-2 pb-2">REST API (JSON)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Technology</h2>
              <ul className="text-gray-700">
                <li className="border-b border-gray-300 pt-2 pb-2">
                  Git & Version control
                </li>
                <li className="border-b border-gray-300 pt-2 pb-2">
                  CMS / Strapi, Wordpress
                </li>
                <li className="border-b border-gray-300 pt-2 pb-2">
                  CSS frameworks / Bootstrap, Tailwind
                </li>
                <li className="pt-2 pb-2">
                  Cloud services / Amazon AWS, Azure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
