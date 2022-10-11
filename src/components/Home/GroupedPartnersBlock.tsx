import styled from "styled-components";

import MoneyLionLogo from "../../../public/images/moneyLion.svg";
import WealthTechLogo from "../../../public/images/wealthtech.svg";
import PartnersBox from "../common/PartnerBox";
import { homePageBlocksSpacing } from "../../sharedStyles";
import TradingLogo from "../../../public/images/trading.svg";
import GranatusLogo from "../../../public/images/granatus.svg";
import BlockTitle from "../common/BlockTypography";

const Container = styled.div`
  ${homePageBlocksSpacing}
`;

const StyledPartnersBlock = styled.div`
  display: grid;
  gap: 40px;
  grid-template: 1fr / 1fr 1fr;
  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
  };
`;

const GroupedPartnersBlock = () => (
  <Container id="partners">
    <BlockTitle text="Partners" />
    <StyledPartnersBlock>
      <PartnersBox
        logo={MoneyLionLogo}
        title="With MoneyLion we are developing personalized
        financial calculators, financial loans marketplace and
        recommendation engine for the Feed. MoneyLion is a
        financial technology company, not a bank."
      />
      <PartnersBox
        logo={TradingLogo}
        title="Integration and automated trading service with crypto exchanges"
      />
      <PartnersBox
        logo={WealthTechLogo}
        title="Personal Financial Planning tools based on
        algorithmic calculations. We used different data sources
        to build a unified demographics database, that allowed us
        to understand consumer needs, and helped with user clustering."
      />
      <PartnersBox
        logo={GranatusLogo}
        title="Startup fundability predictive modeling using company details"
      />
    </StyledPartnersBlock>
  </Container>
);

export default GroupedPartnersBlock;
