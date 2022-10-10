import Image from "next/image";
import styled from "styled-components";

import Typography from "./Typography";
import email from '../../../public/images/mail.svg';
import { clearDefaultButtonStyles, homePageBlocksSpacing } from "../../sharedStyles";

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

const Email = styled.button`
  ${clearDefaultButtonStyles}
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
  transition: background-color 300ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover.onSecondary};
  }
`;

const StyledTitle = styled(Typography)`
  font-weight: 600;
  line-height: 39px;
`;

const StyledCaption = styled(Typography)`
  font-weight: 400;
  line-height: 24px;
`;

const StyledHiLearnEmail = styled(Typography)`
  font-weight: 700;
  line-height: 24px;
`;

const Contacts = () => {
  const handleOpenDefaultMail = () => {
    window.location.href = 'mailto:info@hilearn.io';
  };

  return (
    <Container id="contacts">
      <Texts>
        <StyledTitle size="xl" margin="0 0 16px 0">
          Contacts
        </StyledTitle>
        <StyledCaption>
          Write to us if you are interested in partnership with us.
        </StyledCaption>
      </Texts>
      <Email onClick={handleOpenDefaultMail}>
        <Image src={email} alt="Email" />
        <StyledHiLearnEmail margin="0 0 0 16px">
          info@hilearn.io
        </StyledHiLearnEmail>
      </Email>
    </Container>
  );
};

export default Contacts;
