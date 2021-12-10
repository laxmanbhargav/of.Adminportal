import React, { useState, useEffect } from 'react';

import Layout from '../components/_App/Layout';
import GoTop from '../components/Shared/GoTop';
import { IndiceProvider } from '../contexts';
import { AuthProvider } from '../contexts/authcontext';

import AuthorizedContent from '../components/Shared/authorizedcontent';

import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';
import '../public/css/meanmenu.min.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
import '../public/css/nice-select.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';



import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <AuthProvider>
          <IndiceProvider>
              <Component {...pageProps} />

              <GoTop scrollStepInPx='100' delayInMs='10.50' />
          </IndiceProvider>
        </AuthProvider>
      </Layout>
    </>
  );
}

export default MyApp
