import styled from "styled-components";

import { homePageResponsivePadding } from "../../sharedStyles";
import Contacts from "../common/Contacts";

import Footer from "./Footer";
import Header from "./Header";

interface ComponentProps {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const HeaderAndMainContainer = styled.div`
  ${homePageResponsivePadding}
  display: grid;
  grid-template: auto 1fr / 1fr;
  max-width: 1200px;
`;

const StyledMain = styled.main`
  margin-top: 147px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-top: 127px;
  }
`;

const Layout = ({ children }: ComponentProps) => {
  return (
    <>
    <Header />
    <Container>
      <HeaderAndMainContainer>
        <StyledMain>
          {children}
        </StyledMain>
        <Contacts />
      </HeaderAndMainContainer>
      <Footer />
    </Container>
    </>
  );
};

export default Layout;
