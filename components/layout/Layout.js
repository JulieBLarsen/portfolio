import Footer from '../Footer';
import Head from './Head';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <Head />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
export default Layout;
