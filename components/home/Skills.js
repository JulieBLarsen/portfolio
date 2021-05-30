import React from 'react';
import { Button, LightButton } from '../common/Buttons';
import Highlight from '../common/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';

function Skills() {
  return (
    <div className="container max-w-6xl h-screen mx-auto flex flex-col gap-10 justify-center">
      <div className="flex flex-row justify-center items-center gap-10">
        <div>
          <h2>Skills & Technology</h2>
          <p>
            I have a lot of experience using Adobe Illustrator and Photoshop and
            have been using Adobe XD for two years. I feel comfortable with
            coding
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
          <p>
            For my projects I use <Highlight>Git</Highlight> and I often use
            <Highlight>Strapi</Highlight> as a CMS.
          </p>
        </div>
        <div className="relative rounded-xl h-full w-full">
          <Image
            src="/keyboard.jpg"
            alt="Colorful keyboard"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;