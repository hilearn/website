import styled from "styled-components";
import AgilityBox from "./common/AgilityBox";
import Typography from "./common/Typography";
import { Agilities } from "./constants";


const Container = styled.div`

`;

const Subtitle = styled(Typography)`
  max-width: 784px;
  margin-top: 24px;
  margin-bottom: 40px;
`;

const WhatWeDo = () => (
  <>
    <Typography>What we do</Typography>
    <Subtitle>
      HiLearn is a Technology company based in Yerevan,
      Armenia. HiLearn started as an algorithmic trading
      startup, but we pivoted in late 2019 to form a strategic
      partnership with Wealth Technologies Inc, and recently with
      MoneyLion Inc. The latter is a US fintech company providing
      online banking services.
    </Subtitle>
  {
    Agilities.forEach((agility) => (
      <div>{agility}</div>
    ))
  }
  </>
);

export default WhatWeDo;
