import styled from 'styled-components';

import Advantages from './Advantages';
import Careers from './Careers';
import Team from './Team';

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
      <Advantages />
      <Team />
      <Careers />
    </Container>
  );
};

export default Home;
