import styled from "styled-components";
import Image from 'next/image';

import logo from '../../../public/images/optimized/logo.svg';
import NavigationLinks from "../common/NavigationLinks";
import Typography from "../common/Typography";
import { FooterSmall, FooterLarger } from "../common/Togglers";
import Linkedin from "../common/Linkedin";

const Container = styled.footer`
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 64px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  width: 100%;
  max-width: 1168px;
  @media (min-width: 600px) {
    margin-left: 60px;
    margin-right: 60px;
    max-width: 1080px;
  }
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: #fff;
  padding: 27px 0 16px 0;
  position: relative;
`;

const LinksAndCopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.footer}) {
    position: absolute;
    left: 0;
    top: 83px;
    padding-bottom: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.footer}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Copyright = styled(Typography)`
  font-weight: 400;
  line-height: 16px;
`;


const Footer = () => {
  return (
    <Container>
      <Content>
        <Image
          src={logo}
          alt="Logo"
        />
        <LinksAndCopyrightContainer>  
          <FooterSmall>
            <NavigationLinks vertical inFooter />
          </FooterSmall>
          <FooterLarger>
            <NavigationLinks inFooter />
          </FooterLarger>    
          <Copyright size="xs" margin="27px 0 0 0" color="secondary">
            Copyright © Hilearn 2022
          </Copyright>
        </LinksAndCopyrightContainer>
        <Linkedin href="https://www.linkedin.com/company/hilearn/" ariaLabel="LinkedIn" />
      </Content>
    </Container>
  );
};

export default Footer;
