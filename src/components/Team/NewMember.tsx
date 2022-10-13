import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { ReactNode } from "react";

import PagePaths from "../../utils/constants/pagePaths";
import orange from '../../../public/images/orange.png';
import arrow from '../../../public/images/long_right.svg';
import { clearDefaultButtonStyles } from "../../sharedStyles";
import Typography from "../common/Typography";

const Container = styled.div`
  display: grid;
  grid-template: 1fr 108px / 1fr;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  position: relative;
`;

const StyledImage = styled(Image)`
  border-radius: 16px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

interface ButtonProps {
  children: ReactNode;
  onClick?: VoidFunction;
}

const StyledButton = styled.button`
  ${clearDefaultButtonStyles}
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 24px;
  padding: 8px 24px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  transition: background-color 300ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover.onPrimary};
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  line-height: 21px;
  margin-right: 18px;
  @media (max-width: 580px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    margin-right: 0;
  }
`;

const IconContainer = styled.div`
  display: none;
  @media (min-width: 580px) {
    display: flex;
    align-items: center;
  }
`;

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledTypography>
        {children}
      </StyledTypography>
      <IconContainer>
        <Image className="icon" src={arrow} alt="" />
      </IconContainer>
    </StyledButton>
  );
};

const NewMember = () => {
  const router = useRouter();

  const handleGoToCareers = () => {
    router.push(PagePaths.careers);
  };

  return (
    <Container>
      <Content>
        <StyledImage
          src={orange}
          alt=""
        />
        <ButtonContainer>
          <Button onClick={handleGoToCareers}>
            Join our team
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default NewMember;
