import styled from "styled-components";

import { homePageBlocksSpacing } from "../../sharedStyles";
import advantages from "../../utils/constants/advantages";
import Advantage from "../common/Advantage";
import BlockTitle from "../common/BlockTitle";

const Container = styled.div`
  ${homePageBlocksSpacing}
`;

const Content = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template: repeat(5, 1fr) / 1fr;
  grid-gap: 40px;
  ${({ theme }) => (`    
    @media (min-width: ${theme.breakpoints.s}) {
      grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoints.m}) {
      grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    }
  `)}
`;

const Advantages = () => {
  return (
    <Container>
      <BlockTitle text="Our advantages" />
      <Content>
        {advantages.map((a, i) => (
          <Advantage
            key={a.title}
            queue={`0${i + 1}.`}
            title={a.title}
            description={a.description}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Advantages;
