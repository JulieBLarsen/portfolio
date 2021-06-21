import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';

function Card({ project }) {
  return (
    <div className="bg-white rounded-lg h-auto grid grid-rows-2 shadow hover:shadow-lg transition">
      <div className="relative rounded-t-md">
        <Link href={`/projects/${project.slug}`} passHref>
          <Image
            src={project.featured_image.formats.small.url}
            alt={project.title}
            layout="fill"
            className="object-cover object-center cursor-pointer rounded-t-md"
          />
        </Link>
      </div>
      <div className="h-full p-5 md:p-6 flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <ul className="flex flex-wrap mb-2 md:mb-3">
            {project.technologies
              .filter((tech) => tech.featured)
              .map((tech) => (
                <li
                  key={tech.name + tech.id}
                  className="text-xs m-1 mt-0 ml-0 p-1 px-3 bg-purple-500 text-white rounded-xl">
                  {tech.name}
                </li>
              ))}
          </ul>
          <Link href={`/projects/${project.slug}`} passHref>
            <h2 className="cursor-pointer text-base font-bold text-gray-800 mt-1 mb-1">
              {project.title}
            </h2>
          </Link>
          <Link href={`/projects/${project.slug}`} passHref>
            <p className="cursor-pointer m-0 leading-normal md:leading-relaxed text-sm line-clamp-3">
              {project.small_description}
            </p>
          </Link>
        </div>
        <Link href={`/projects/${project.slug}`}>
          <a className="block mt-2 text-base transition text-purple-500 hover:text-purple-600 font-bold">
            View project
            <ArrowRightIcon className="inline ml-2 h-6 w-6" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Card;
