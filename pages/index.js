import Layout from '../components/layout/Layout';
import Header from '../components/home/Header';
import GetToKnowMe from '../components/home/GetToKnowMe';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <GetToKnowMe />
        <Skills />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}
