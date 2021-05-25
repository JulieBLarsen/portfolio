import { fetchAPI } from '../../lib/api'

export default function Projects({ projects, technologies }) {
  console.log(projects)
  console.log(technologies)
  return (
    <>
      <h1>test</h1>
    </>
  )
}
export async function getStaticProps() {
  const [projects, featuredTech] = await Promise.all([
    fetchAPI('/projects'),
    fetchAPI('/technologies?featured=${true}'),
  ])

  return {
    props: { projects, featuredTech },
  }
}
