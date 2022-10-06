import Image from "next/image";
import styled from "styled-components";

import Typography from "./Typography";
import email from '../../../public/images/mail.svg';
import { homePageBlocksSpacing } from "../../sharedStyles";

const Container = styled.div`
  ${homePageBlocksSpacing}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  background-color: #fff;
  padding: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  };
`;

const Texts = styled.div`
  padding: 8px;
  margin-bottom: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 0;
    margin-bottom: 24px;
  };
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 64px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  width: auto;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 100%;
  };
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    padding: 32px;
  };
`;

const StyledTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
`;

const StyledCaption = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const StyledHiLearnEmail = styled(Typography)`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const Contacts = () => {
  return (
    <Container>
      <Texts>
        <StyledTitle margin="0 0 16px 0">
          Contacts
        </StyledTitle>
        <StyledCaption>
          Write to us if you are interested in partnership with us.
        </StyledCaption>
      </Texts>
      <Email>
        <Image src={email} alt="Email" />
        <StyledHiLearnEmail margin="0 0 0 16px">
          info@hilearn.io
        </StyledHiLearnEmail>
      </Email>
    </Container>
  );
};

export default Contacts;
