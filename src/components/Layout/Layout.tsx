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

const Layout = ({ children }: ComponentProps) => {
  return (
    <Container>
      <HeaderAndMainContainer>
        <Header />
        <main>
          {children}
        </main>
        <Contacts />
      </HeaderAndMainContainer>
      <Footer />
    </Container>
  );
};

export default Layout;
