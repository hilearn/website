import styled from 'styled-components';

import Advantage from './common/Advantage';
import PartnersBox from './common/PartnearBox';
import WhatWeDo from './Home/WhatWeDo';

const Container = styled.div`
  
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <WhatWeDo />
      {/* <Advantage
        queue='01.'
        title="Cross-tier teams"
        description="Products are developed with an active engagement of different roles. We provide synergy between our multi-tiered teams to help your business to achieve the goals on time, with scale and high quality."
      /> */}
    </Container>
  );
};

export default Home;
