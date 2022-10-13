import Head from "next/head";

import Team from "../src/components/Team/Team";

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Team | hilearn.io</title>
      </Head>
      <Team />
    </>
  );
};

export default TeamPage;