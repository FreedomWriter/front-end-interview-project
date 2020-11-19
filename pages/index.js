import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import ProductList from "../components/product-list/ProductList";

const Index = () => {
  return (
    <>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Header />
      <main>
        <Hero />
        <ProductList />
        {/* <p>
          Please take a look at the README before staring and feel free to reach
          out with any questions or concerns!
        </p> */}
      </main>
      <Footer />
    </>
  );
};

export default Index;
