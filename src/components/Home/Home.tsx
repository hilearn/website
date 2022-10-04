import styled from 'styled-components';

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
      <Advantages />
    </Container>
  );
};

export default Home;
