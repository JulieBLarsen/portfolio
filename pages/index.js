import Layout from '../components/layout/Layout';
import Header from '../components/home/Header';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';
import Projects from '../components/home/projectsection/Projects';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </Layout>
    </>
  );
}
