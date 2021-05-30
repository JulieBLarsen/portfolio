import Image from 'next/image';
import Link from 'next/link';
import { LightButton } from '../common/Buttons';
import Highlight from '../common/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';

function GetToKnowMe() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className="container max-w-6xl h-screen mx-auto flex flex-col gap-5 justify-center">
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="relative h-full w-full rounded-full">
          <Image
            src="/juliecutoutwithoutlips.png"
            alt="Picture of Julie Larsen"
            layout="fill"
            objectFit="contain"
            className="bg-rose-400 dark:bg-black rounded-full"
          />
        </div>
        <div>
          <h2>Get to know me</h2>
          <p className="font-semibold text-gray-800 mt-6 leading-relaxed">
            I live in Stavanger, Norway and I'm currently studying at Noroff
            School of technology and digital media, getting a degree in
            Front-end development. I'll have completed my education in the
            beginning of June 2021 and will be looking for an internship or
            junior level job.
          </p>
          <p>
            I've always had an interest in web design and development but it
            wasn't until I decided to make it into a career that I really
            started learning more about it.
          </p>
          {/*           <p>
            I am passionate about learning new technology and challenging myself
            which is why web development is appealing to me.
          </p> */}
          <p className="text-lg mt-6 leading-relaxed">
            Take a look at my{' '}
            <Link href="/projects">
              <a>projects</a>
            </Link>{' '}
            and don't be afraid to contact me 😊
          </p>
          {/* <div onClick={() => setTheme('light')}>
            <LightButton>Click for light theme</LightButton>
          </div>
          <div onClick={() => setTheme('purple')}>
            <LightButton>Click for purple theme</LightButton>
          </div> */}
          <div className="mt-10 flex flex-row">
            {' '}
            <LightButton href="https://github.com/juliebl">
              {' '}
              <FontAwesomeIcon
                className="mr-2 h-4 inline"
                icon={['fab', 'github']}
              />
              Github
            </LightButton>
            <LightButton href="https://www.linkedin.com/in/julie-larsen-364681190/">
              <FontAwesomeIcon
                className="mr-2 h-4 inline"
                icon={['fab', 'linkedin']}
              />
              Linkedin
            </LightButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetToKnowMe;
