import "bootstrap/dist/css/bootstrap.css"; // Add this line
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./rootlayout";

import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
      
      <Component {...pageProps} />
    </>
  );
}
