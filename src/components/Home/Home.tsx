import styled from 'styled-components';
import WhatWeDo from './WhatWeDo';

import Advantages from './Advantages';
import CareersBlock from './CareersBlock';
import TeamImages from './TeamImages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <WhatWeDo />
      <Advantages />
      <TeamImages />
      <CareersBlock />
    </Container>
  );
};

export default Home;
