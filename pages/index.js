import About from '../components/home/about';
import Projectsection from '../components/home/projectsection';
import Contact from '../components/home/contact';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <About></About>
        <Projectsection></Projectsection>
        <Contact></Contact>
      </Layout>
    </>
  );
}
