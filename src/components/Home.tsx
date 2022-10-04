import styled from 'styled-components';

import Advantage from './common/Advantage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Advantage
        queue='01.'
        title="Cross-tier teams"
        description="Products are developed with an active engagement of different roles. We provide synergy between our multi-tiered teams to help your business to achieve the goals on time, with scale and high quality."
      />
    </Container>
  );
};

export default Home;
