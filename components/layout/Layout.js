import React from 'react';
import Footer from '../footer';
import Head from './Head';

function Layout({ children }) {
  return (
    <div>
      <Head />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
export default Layout;
