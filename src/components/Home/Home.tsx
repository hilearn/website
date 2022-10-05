import styled from 'styled-components';
import WhatWeDo from '../WhatWeDo';

import Advantages from './Advantages';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <WhatWeDo />
    </Container>
  );
};

export default Home;
