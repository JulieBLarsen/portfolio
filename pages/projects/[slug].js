import Head from 'next/head';
import { fetchAPI } from '../../lib/api';
import {
  ChevronLeftIcon,
  CodeIcon,
  ExternalLinkIcon,
} from '@heroicons/react/outline';
import Layout from '../../components/layout/Layout';
import { Button, LightButton } from '../../components/common/Buttons';
import ImageGrid from '../../components/projects/singleProject/ImageGrid';
import { useRouter } from 'next/router';

export default function Project({ project }) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Head>
          <title>Julie Larsen | {project.title}</title>
        </Head>
        <div className="py-20 md:py-40">
          <div className="mb-4 inline-block">
            <a
              className="cursor-pointer text-sm py-1 pr-1 font-medium hover:text-gray-900 flex"
              onClick={() => router.back()}>
              <ChevronLeftIcon className="w-4 mr-1 icon" />
              Go back to projects
            </a>
          </div>

          <div className="mx-auto">
            <ImageGrid
              featured={project.featured_image}
              images={project.images}
            />
          </div>
          <div className="mx-auto pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h1 className="font-xl text-center md:text-left">
                {project.title}
              </h1>
              <p className="text-base text-gray-700 mt-6 leading-relaxed whitespace-pre-line">
                {project.brief}
              </p>
              <div className="pt-4 flex flex-wrap gap-2 items-center justify-center md:justify-start">
                <Button href={project.link_live}>
                  <ExternalLinkIcon className="w-4 mr-2 icon" />
                  View Live
                </Button>
                <LightButton href={project.link_github}>
                  <CodeIcon className="w-4 mr-2 icon" />
                  View on Github
                </LightButton>
              </div>
            </div>
            <div className="pt-6 lg:p-10  text-center md:text-left">
              <h2 className="text-lg font-semibold">Technology</h2>
              <ul className="text-gray-700 divide-y divide-gray-300">
                {project.technologies.map((tech) => (
                  <li key={tech.id} className="py-2">
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
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
