import React from 'react';
import { Button, LightButton } from '../common/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from '../common/Highlight';
import Image from 'next/image';

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen mt-20 sm:mt-0 grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
      <div className="w-full lg:hidden flex justify-center items-center lg:items-baseline">
        <div className="relative my-10 h-60 w-60 xs:h-80 xs:w-80 m-auto shadow-fog-purple rounded-full">
          <Image
            src="/keyboard.jpg"
            alt="Colorful keyboard"
            layout="fill"
            objectFit="cover"
            className=" rounded-full"
          />
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center text-center sm:items-baseline sm:text-left">
        <h2>Skills & Technology</h2>
        <p>
          I have a lot of experience using Adobe Illustrator and Photoshop and
          have been using Adobe XD for two years. I feel comfortable with coding
          <Highlight>HTML, CSS and Javascript</Highlight>
          and I've been learning
          <Highlight>React and Next.js</Highlight>
          for a couple of months now and want to continue in that direction.
        </p>
        <p>
          I feel confident in using several CSS frameworks and preprocessors
          like
          <Highlight>Bootstrap, Tailwind and Sass/SCSS</Highlight>
          and I have also tried out Styled Components and Material-UI.
        </p>

        <div className="mt-10 flex flex-row">
          <Button href="/projects">View projects</Button>
          <LightButton href="https://github.com/juliebl">
            <FontAwesomeIcon
              className="mr-2 h-4 inline"
              icon={['fab', 'github']}
            />
            <span>Github</span>
          </LightButton>
        </div>
      </div>
      <div className="hidden lg:flex col-span-1 w-full justify-center items-center">
        <div className="relative w-96 h-96 shadow-fog-purple">
          <Image
            src="/keyboard.jpg"
            alt="Colorful keyboard"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
