import Head from 'next/head';
import { ToastProvider } from 'react-toast-notifications';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>OE Entertainments</title>
      </Head>

      <ToastProvider
        placement='top-center'
        autoDismissTimeout={6000}
        autoDismiss
      >
        {children}
      </ToastProvider>
    </>
  );
};

export default Layout;
