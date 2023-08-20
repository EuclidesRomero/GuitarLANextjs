import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
export default function Layout({ children, title = "", descrption = "" }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={descrption} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
