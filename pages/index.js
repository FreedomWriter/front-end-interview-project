import Head from "next/head";
import Header from "../components/header/Header";

const Index = () => {
  return (
    <>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <main>
        <Header />
        <p>
          Please take a look at the README before staring and feel free to reach
          out with any questions or concerns!
        </p>
      </main>
    </>
  );
};

export default Index;
