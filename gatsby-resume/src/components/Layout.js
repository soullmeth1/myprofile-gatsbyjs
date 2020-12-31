import React from 'react';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Questrial&display=swap`}
          rel="stylesheet"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=Righteous&display=swap`}
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
