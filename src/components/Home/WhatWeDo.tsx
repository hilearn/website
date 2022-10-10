import styled from "styled-components";

import { homePageBlocksSpacing } from "../../sharedStyles";
import AgilityBox from "../common/AgilityBox";
import Typography from "../common/Typography";
import agilities from "../../utils/constants/agilities";

const Container = styled.div`
  ${homePageBlocksSpacing}
`;

const StyledTypography = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  line-height: 39px;
  @media(max-width: 768px) {
    text-align: center;
  }
`;

const Subtitle = styled(Typography)`
  max-width: 784px;
  margin-top: 24px;
  margin-bottom: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media(max-width: 768px) {
    text-align: center;
    max-width: none;
  }
`;

const AgilitiesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;
  @media(max-width: 768px) {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
  };
  @media(max-width: 375px) {
    gap: 16px;
  }
`;

const WhatWeDo = () => (
  <Container id="what-we-do">
    <StyledTypography size="xl">What we do</StyledTypography>
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
