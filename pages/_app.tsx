import type { AppProps } from 'next/app';
import '@/app/globals.css';

import RootLayout from "@/app/layout";

const _app = ({Component, pageProps}: AppProps) => {
  return (
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
  );
}

export default _app;
