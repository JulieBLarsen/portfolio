import About from '../components/home/About';
import Projectsection from '../components/home/Projectsection';
import Contact from '../components/home/Contact';
import Layout from '../components/layout/Layout';
import Header from '../components/home/Header';
import GetToKnowMe from '../components/home/GetToKnowMe';
import Skills from '../components/home/Skills';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <GetToKnowMe />
        {/*         <About></About>
        <Projectsection></Projectsection> */}
        <Skills />
        <Contact />
      </Layout>
    </>
  );
}
