import Head from "next/head";

import Team from "../src/components/Team/Team";

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>HiLearn | Team</title>
      </Head>
      <Team />
    </>
  );
};

export default TeamPage;