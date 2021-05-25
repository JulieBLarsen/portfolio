import Link from 'next/link'
import Menu from '../../components/menu'
import Footer from '../../components/footer'
import Head from 'next/head'
import { fetchAPI } from '../../lib/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export async function getStaticProps() {
  const [projects, featuredTech] = await Promise.all([
    fetchAPI('/projects'),
    fetchAPI(`/technologies?featured=${true}`),
  ])

  return {
    props: { projects, featuredTech },
  }
}

export default function Projects({ projects, featuredTech }) {
  return (
    <>
      <Head>
        <title>Julie Larsen | Projects</title>
      </Head>
      <Menu></Menu>
      <div className="container mx-auto px-10 pt-10">
        <h1 className="text-center">Projects</h1>
        <div className="mt-16 my-3 flex flex-wrap -m-1">
          {featuredTech.map((tech) => (
            <span key={tech.id} className="tag active">
              <FontAwesomeIcon className="mr-3" icon={faTimes} />
              {tech.name}
            </span>
          ))}
          {/*<span className="tag active">
            <FontAwesomeIcon className="mr-3" icon={faTimes} />
            School
          </span>
          <span className="tag active">
            <FontAwesomeIcon className="mr-3" icon={faTimes} />
            Personal
          </span>
          <span className="tag">Design</span>
          <span className="tag">HTML + CSS</span>
          <span className="tag">Javascript</span>
          <span className="tag">React</span> */}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg h-auto flex flex-col shadow hover:shadow-lg transition">
              <Link href={`/projects/${project.slug}`}>
                <img
                  className="cursor-pointer h-56 rounded w-full transition object-cover object-center"
                  src={project.images[0].url}
                  alt={project.title}
                />
              </Link>
              <div className="h-64 p-5 md:p-6 flex flex-col justify-between">
                <div className="flex flex-col justify-between">
                  <ul className="flex flex-wrap mb-2 md:mb-3">
                    {project.technologies
                      .filter((tech) => tech.featured)
                      .map((tech) => (
                        <li
                          key={tech.name + tech.id}
                          className="text-xs m-1 mt-0 ml-0 p-1 px-3 bg-gray-100 rounded-xl">
                          {tech.name}
                        </li>
                      ))}
                  </ul>
                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="cursor-pointer text-base font-bold text-gray-800 mt-1 mb-1">
                      {project.title}
                    </h2>
                  </Link>
                  <Link href={`/projects/${project.slug}`}>
                    <p className="cursor-pointer m-0 leading-normal md:leading-relaxed text-sm clamp-3">
                      {project.small_description}
                    </p>
                  </Link>
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <a className="block mt-2 text-base transition text-purple-500 hover:text-purple-600 font-bold">
                    View project
                    <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}
