import styled from 'styled-components';
import WhatWeDo from './WhatWeDo';

import Advantages from './Advantages';
import Careers from './Careers';
import Team from './Team';
import Contacts from './Contacts';

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
      <Team />
      <Careers />
      <Contacts />
    </Container>
  );
};

export default Home;
