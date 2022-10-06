import styled from 'styled-components';
import WhatWeDo from './WhatWeDo';

import Advantages from './Advantages';
import CareersBlock from './CareersBlock';
import TeamImages from './TeamImages';
import Team from '../Team/Team';
import GroupedPartnersBlock from '../GroupedPartnersBlock';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <WhatWeDo />
      <GroupedPartnersBlock />
      <Advantages />
      <TeamImages />
      <CareersBlock />
    </Container>
  );
};

export default Home;
