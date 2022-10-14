import Head from "next/head";

import Home from "../src/components/Home/Home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>HiLearn | AI/ML, Data Science and Quantitative Analysis. Web & Mobile Development</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
