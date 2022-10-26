import Head from "next/head";

import Team from "../src/components/Team/Team";
import preview from "../public/images/preview.jpg";

const title = 'HiLearn | Team';

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" property="og:title" content={title} />
        <meta name="image" property="og:image" content={preview.src} />
        <meta name="twitter:image" content={preview.src} />
      </Head>
      <Team />
    </>
  );
};

export default TeamPage;