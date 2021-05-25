import Head from 'next/head';
import Footer from '../components/footer';
import About from '../components/home/about';
import Projectsection from '../components/home/projectsection';
import Contact from '../components/home/contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Julie Larsen</title>
      </Head>
      <About></About>
      <Projectsection></Projectsection>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
