import Head from "next/head";

import Home from "../src/components/Home/Home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | hilearn.io</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
