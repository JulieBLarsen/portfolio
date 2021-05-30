import { fetchAPI } from '../../lib/api';
import Menu from '../../components/Menu';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import Footer from '../../components/Footer';

export default function Project({ project }) {
  return (
    <>
      <Head>
        <title>Julie Larsen | {project.title}</title>
      </Head>
      <Menu></Menu>

      <div className="lg:container mx-auto lg:px-10">
        <AwesomeSlider
          className="single-product__carousel h-96 pt-10 lg:p-10"
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
          {project.images.map((image) => (
            <div
              key={image.id}
              className="h-full w-full object-cover object-center">
              <img
                src={image.url}
                className="h-full w-full object-cover  object-center"
                alt={image.alt}
              />
            </div>
          ))}
        </AwesomeSlider>
      </div>
      <div className="container-fluid lg:container mx-auto lg:px-10 pt-10 lg:pt-0 grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-6">
        <div className="col-span-2 p-6 lg:p-10">
          <h1 className="font-xl">{project.title}</h1>
          <p className="text-base text-gray-700 mt-6 leading-relaxed whitespace-pre-line">
            {project.brief}
          </p>
          <div>
            <a className="btn w-max ml-0" href={project.link_live}>
              <FontAwesomeIcon className="w-4 mr-2 icon" icon={faDesktop} />
              View Live
            </a>
            <a
              className="btn btn-light text-purple-600 w-max ml-0"
              href={project.link_github}>
              <FontAwesomeIcon
                className="w-4 mr-2 icon"
                icon={['fab', 'github']}
              />
              View on Github
            </a>
          </div>
        </div>
        <div className="p-6 lg:p-10">
          <h2 className="text-lg font-semibold">Technology</h2>
          <ul className="text-gray-700">
            {project.technologies.map((tech) => (
              <li key={tech.id} className="border-b border-gray-300 pt-2 pb-2">
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const articles = await fetchAPI('/projects');

  return {
    paths: articles.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projects = await fetchAPI(`/projects?slug=${params.slug}`);

  return {
    props: { project: projects[0] },
    revalidate: 1,
  };
}
