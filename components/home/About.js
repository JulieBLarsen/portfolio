import Image from 'next/image';
import Link from 'next/link';
import { Button, LightButton } from '../common/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function About() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <section
      id="about"
      className="h-screen grid m-auto grid-cols-1 lg:grid-cols-3 lg:gap-10">
      <div className="w-full flex flex-col justify-center items-center lg:items-baseline">
        <div className="relative m-auto lg:m-0 h-60 w-60 xs:h-80 xs:w-80 rounded-full shadow-fog-purple">
          <Image
            src="/juliecutout2.png"
            alt="Picture of Julie Larsen"
            layout="fill"
            objectFit="contain"
            className="bg-purple-300 dark:bg-black rounded-full"
          />
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center text-center sm:items-baseline sm:text-left">
        <h2>Get to know me</h2>
        <p className="font-semibold text-gray-800">
          I'm 30 years old and I live in Stavanger, Norway. I just graduated
          from Noroff School of technology and digital media with a degree in
          Front-end development.
        </p>
        <p>
          Creating websites makes me happy and I'm passionate about learning new
          things, so I'm currently looking for a job where I can continue to
          develop in a team with people who also strive to be better.
        </p>

        <p>
          Take a look at my
          <Link href="/projects">
            <a className="highlight__link">projects</a>
          </Link>
          and don't be afraid to contact me 😊
        </p>
        <div className="mt-10 flex flex-row">
          <Button href="/julie-larsen_cv.pdf">View CV</Button>

          <LightButton href="https://www.linkedin.com/in/julie-larsen-364681190/">
            <FontAwesomeIcon
              className="mr-2 h-4 inline"
              icon={['fab', 'linkedin']}
            />
            Linkedin
          </LightButton>
        </div>
      </div>
    </section>
  );
}

export default About;
