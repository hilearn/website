import Image from "next/image";
import styled from "styled-components";

import Typography from "../common/Typography";
import email from '../../../public/images/mail.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  background-color: #fff;
  padding: 16px;
`;

const Texts = styled.div`
  padding: 8px;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 64px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
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
