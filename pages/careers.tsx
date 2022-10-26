import Head from "next/head";

import Careers from "../src/components/Careers/Careers";
import preview from "../public/images/preview.jpg";

const title = 'HiLearn | Careers';

const CareersPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" property="og:title" content={title} />
        <meta name="image" property="og:image" content={preview.src} />
        <meta name="twitter:image" content={preview.src} />
      </Head>
      <Careers />
    </>
  );
};

export default CareersPage;
