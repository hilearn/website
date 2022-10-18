import styled from "styled-components";

import PageTitle from "../common/PageTitle";
import Typography from "../common/Typography";

import Benefits from "./Benefits";
import OpenPositions from "./OpenPositions";

const SubTitle = styled(Typography)`
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 24px;
  }
`;

const Careers = () => {
  return (
    <div>
      <PageTitle margin="0 0 16px 0">
        Careers
      </PageTitle>
      <SubTitle>
        We are currently growing in multiple directions, and are in the process of welcoming new team members in our office in Yerevan (near YSU).
      </SubTitle>
      <OpenPositions />
      <Benefits />
    </div>
  );
};

export default Careers;
