import Head from "next/head";

import Home from "../src/components/Home/Home";
import preview from "../public/images/preview.jpg";

const title = 'HiLearn | AI/ML, Data Science and Quantitative Analysis. Web & Mobile Development';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" property="og:title" content={title} />
        <meta name="image" property="og:image" content={preview.src} />
        <meta name="twitter:image" content={preview.src} />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
