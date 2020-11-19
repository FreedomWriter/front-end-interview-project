import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import ProductGroupList from "../components/product-group-list/ProductGroupList";

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
        <ProductGroupList />
      </main>
      <Footer />
    </>
  );
};

export default Index;
