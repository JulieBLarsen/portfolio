import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import Button from '../common/Buttons';

export default function ProjectSection() {
  return (
    <section className="min-h-screen mt-36 lg:m-0  grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1">
      <AwesomeSlider
        className="lg:h-screen"
        organicArrows={false}
        buttonContentRight={
          <FontAwesomeIcon
            className="text-white text-4xl"
            icon={faChevronRight}
          />
        }
        buttonContentLeft={
          <FontAwesomeIcon
            className="text-white text-4xl"
            icon={faChevronLeft}
          />
        }
        bullets={false}
        fillParent={false}>
        <div className="h-full w-full object-cover object-center">
          <img
            src="/images/gallery.jpg"
            className="h-full w-full object-cover  object-center"
            alt=""
          />
        </div>
        <div className="h-full w-full object-cover object-center">
          <img
            src="/images/bilder.jpg"
            className="h-full w-full object-cover  object-center"
            alt=""
          />
        </div>
      </AwesomeSlider>
      <div className="lg:col-start-1 lg:col-span-1 lg:row-start-1 m-8 lg:m-10 lg:-10 xl:p-36 md:text-center lg:text-left flex flex-col justify-center items-baseline md:items-center lg:items-baseline">
        <h2>Projects & School Assignments</h2>
        <p>
          This is a collection of the front-end development and design projects
          I have made in the past 1 1/2 years. There are both old and new
          projects to show my progress throughout my studies.
        </p>

        <Link href="/projects">
          <Button>View projects</Button>
        </Link>
      </div>
    </section>
  );
}
