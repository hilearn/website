import WealthTech from "../../public/images/wealthTech.png";
import MoneyLionImg from "../../public/images/moneyLionImg.png";
import MoneyLionLogo from "../../public/images/moneyLionLogo.png";

import PartnersBox from "../common/PartnerBox";
import Typography from "../common/Typography";
import styled from "styled-components";
import { homePageBlocksSpacing } from "../../sharedStyles";

const Container = styled.div`
  ${homePageBlocksSpacing}
`;

const StyledPartnersBlock = styled.div`
  display: grid;
  gap: 40px;
  grid-template: 1fr / 1fr 1fr;
  @media(max-width: 768px) {
    grid-template: 1fr  1fr / 1fr;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  margin-bottom: 40px;
`;

const GroupedPartnersBlock = () => (
  <Container id="partners">
    <StyledTypography size="xl">Partners</StyledTypography>
    <StyledPartnersBlock>
      <PartnersBox
        logo={MoneyLionLogo}
        image={MoneyLionImg}
        companyName="MoneyLion"
        title="With MoneyLion we are developing personalized
        financial calculators, financial loans marketplace and
        recommendation engine for the Feed. MoneyLion is a
        financial technology company, not a bank."
      />
      <PartnersBox
        image={WealthTech}
        companyName="Wealth Technologies Inc."
        title="With Wealth Technologies we have created Personal
        Financial Planning tools based on algorithmic calculations.
        We used different data sources to build a unified demographics
        database, that allowed us to understand consumer needs, and
        helped with user clustering."
      />
    </StyledPartnersBlock>
  </Container>
);

export default GroupedPartnersBlock;
