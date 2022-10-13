import styled from "styled-components";

import { homePageBlocksSpacing, responsiveAlignment } from "../../sharedStyles";
import AgilityBox from "../common/AgilityBox";
import { agilities_1, agilities_2} from "../../utils/constants/agilities";
import BlockTitle from "../common/BlockTypography";
import Typography from "../common/Typography";

const Container = styled.div`
  ${homePageBlocksSpacing}
`;

const Subtitle = styled(Typography)`
  ${responsiveAlignment}
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 24px;
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
    gap: 9px;
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
      agilities_1.map((agility) => (
        <AgilityBox
          key={agility.title}
          img={agility.icon}
          title={agility.title}
          subtitle={agility.subtitle}
        />
      ))
      }
    </AgilitiesBlock>
    <Subtitle margin="64px 0 0 0">
      All these development services are equipped with
    </Subtitle>
    <AgilitiesBlock>
      {
        agilities_2.map((agility) => (
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
