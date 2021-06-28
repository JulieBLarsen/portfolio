import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title = '' }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? ' | ' : ''}Julie Larsen - Front-end developer
      </title>
      <meta
        name="keywords"
        content="portfolio, front end development, noroff, stavanger, sandnes"
      />
      <meta name="author" content="Julie Larsen" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content="Julie Larsen - Front-end developer" />
      <meta
        name="description"
        content="Portfolio of front end developer Julie Larsen who is located in Stavanger"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.julielarsen.dev/" />
      <meta property="og:title" content="Julie Larsen - Front-end developer" />
      <meta
        property="og:description"
        content="Portfolio of front end developer Julie Larsen who is located in Stavanger"
      />
      <meta property="og:image" content="/screenshot_website.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.julielarsen.dev/" />
      <meta
        property="twitter:title"
        content="Julie Larsen - Front-end developer"
      />
      <meta
        property="twitter:description"
        content="Portfolio of front end developer Julie Larsen who is located in Stavanger"
      />
      <meta property="twitter:image" content="/screenshot_website.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
};

export default Head;
