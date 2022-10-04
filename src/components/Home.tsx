import styled from 'styled-components';
import RoundedImage from './common/RoundedImage';

import person from '../../public/images/team/zidder.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <RoundedImage src={person} />
    </Container>
  );
};

export default Home;
