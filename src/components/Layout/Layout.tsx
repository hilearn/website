import styled from "styled-components";
import { homePageResponsivePadding } from "../../sharedStyles";
import Footer from "./Footer";
import Header from "./Header";

interface ComponentProps {
  children: React.ReactNode
}

const Container = styled.div`
  display: grid;
  grid-template: 1fr auto / 1fr;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const HeaderAndMainContainer = styled.div`
  ${homePageResponsivePadding}
  display: grid;
  grid-template: auto 1fr / 1fr;
`;

const Layout = ({ children }: ComponentProps) => {
  return (
    <Container>
      <HeaderAndMainContainer>
        <Header />
        <div>
          {children}
        </div>
      </HeaderAndMainContainer>
      <Footer />
    </Container>
  );
};

export default Layout;
