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
  };
  @media(max-width: 375px) {
    gap: 16px;
  }
`;

const WhatWeDo = () => (
  <Container id="what-we-do">
    <BlockTitle text="What we do" />
    <Subtitle>
      HiLearn is a Technology company based in Yerevan,
      Armenia. HiLearn started as an algorithmic trading
      startup, but we pivoted in late 2019 to form a strategic
      partnership with Wealth Technologies Inc, and recently with
      MoneyLion Inc. The latter is a US fintech company providing
      online banking services.
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
