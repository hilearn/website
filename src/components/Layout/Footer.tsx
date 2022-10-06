import styled from "styled-components";
import Image from 'next/image';

import logo from '../../../public/images/logo.svg';
import linkedin from '../../../public/images/linkedin.svg';
import NavigationLinks from "../common/NavigationLinks";
import Typography from "../common/Typography";
import { homePageResponsivePadding } from "../../sharedStyles";
import { Larger, Smaller } from "../common/Togglers";

const Container = styled.footer`
  ${homePageResponsivePadding}
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    position: absolute;
    left: 0;
    top: 83px;
    padding-bottom: 16px;
  }
`;

const Copyright = styled(Typography)`
  font-size: 13px;
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
          <Smaller>
            <NavigationLinks vertical />
          </Smaller>
          <Larger>
            <NavigationLinks />
          </Larger>    
          <Copyright margin="27px 0 0 0" color="secondary">
            Copyright © Hilearn 2022
          </Copyright>
        </LinksAndCopyrightContainer>
        <Image src={linkedin} alt="Linkedin" />
      </Content>
    </Container>
  );
};

export default Footer;
