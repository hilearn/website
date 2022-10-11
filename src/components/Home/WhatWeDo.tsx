import styled from "styled-components";

import { homePageBlocksSpacing } from "../../sharedStyles";
import AgilityBox from "../common/AgilityBox";
import agilities from "../../utils/constants/agilities";
import BlockTitle, { BlockSubtitle } from "../common/BlockTypography";

const Container = styled.div`
  ${homePageBlocksSpacing}
`;

const Subtitle = styled(BlockSubtitle)`
  margin-bottom: 40px;
`;

const AgilitiesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;
  @media(max-width: 920px) {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    gap: 24px;
  };
  @media(max-width: 375px) {
    gap: 16px;
  }
`;

const WhatWeDo = () => (
  <Container id="what-we-do">
    <BlockTitle text="What we do" />
    <Subtitle>
      We have nurtured our services with an aim to provide 
      turn-key solutions for our partners:
    </Subtitle>
    <AgilitiesBlock>
    {
      agilities.map((agility) => (
        <AgilityBox
          key={agility.title}
          img={agility.icon}
          title={agility.title}
          subtitle={agility.subtitle}
        />
      ))
    }
    </AgilitiesBlock>
  </Container>
);

export default WhatWeDo;
