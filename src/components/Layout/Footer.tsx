import styled from "styled-components";
import Image from 'next/image';

import logo from '../../../public/images/logo.svg';
import NavigationLinks from "../common/NavigationLinks";
import Typography from "../common/Typography";
import { homePageResponsivePadding } from "../../sharedStyles";
import { FooterSmall, FooterLarger } from "../common/Togglers";
import Linkedin from "../common/Linkedin";

const Container = styled.footer`
  ${homePageResponsivePadding}
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 64px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: #fff;
  padding: 27px 16px 16px 16px;
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
            <NavigationLinks vertical />
          </FooterSmall>
          <FooterLarger>
            <NavigationLinks />
          </FooterLarger>    
          <Copyright size="xs" margin="27px 0 0 0" color="secondary">
            Copyright © Hilearn 2022
          </Copyright>
        </LinksAndCopyrightContainer>
        <Linkedin href="https://www.linkedin.com/company/hilearn/" />
      </Content>
    </Container>
  );
};

export default Footer;
