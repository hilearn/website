import styled from 'styled-components';
import WhatWeDo from './WhatWeDo';

import Advantages from './Advantages';
import CareersBlock from './CareersBlock';
import TeamImages from './TeamImages';
import GroupedPartnersBlock from './GroupedPartnersBlock';
import HeadingPart from './HeadingPart';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <HeadingPart />
      <WhatWeDo />
      <GroupedPartnersBlock />
      <Advantages />
      <TeamImages />
      <CareersBlock />
    </Container>
  );
};

export default Home;
