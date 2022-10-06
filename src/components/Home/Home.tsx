import styled from 'styled-components';
import WhatWeDo from './WhatWeDo';

import Advantages from './Advantages';
import PartnersBox from '../common/PartnearBox';

import WealthTech from "../../../public/images/wealthTech.png";
import MoneyLionImg from "../../../public/images/moneyLionImg.png";
import MoneyLionLogo from "../../../public/images/moneyLionLogo.png";
import Typography from '../common/Typography';
import CareersBlock from './CareersBlock';
import TeamImages from './TeamImages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledPartnersBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledTypography = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 40px;
`;

const Home = () => {
  return (
    <Container>
      <WhatWeDo />
      <StyledPartnersBlock>
        <PartnersBox
          logo={MoneyLionLogo}
          image={MoneyLionImg}
          companyName="MoneyLion"
          title="With MoneyLion we are developing personalized
          financial calculators, financial loans marketplace and
          recommendation engine for the Feed.  MoneyLion is a
          financial technology company, not a bank."
          height="329px"
          width="580px"
        />
        <PartnersBox
          image={WealthTech}
          companyName="Wealth Technologies Inc."
          title="With Wealth Technologies we have created Personal
          Financial Planning tools based on algorithmic calculations.
          We used different data sources to build a unified demographics
          database, that allowed us to understand consumer needs, and
          helped with user clustering."
          height="152px"
          width="152px"
          bgColor
        />
      </StyledPartnersBlock>
      <Advantages />
      <TeamImages />
      <CareersBlock />
    </Container>
  );
};

export default Home;
