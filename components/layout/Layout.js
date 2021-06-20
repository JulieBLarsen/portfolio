import Footer from './Footer';
import Head from './Head';
import Navbar from './Navigation/Navbar';

function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      <div className="container lg:max-w-6xl px-4 mx-auto">{children}</div>
      <Footer />
    </>
  );
}
export default Layout;
