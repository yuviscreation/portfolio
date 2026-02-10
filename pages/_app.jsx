import Head from "next/head";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-toastify/dist/ReactToastify.css" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" autoClose={3000} newestOnTop />
    </>
  );
}
