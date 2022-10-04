import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

interface ComponentProps {
  children: React.ReactNode
}

const Container = styled.div`
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  @media (min-width: 375px) {
    padding: 40px;
  }
  @media (min-width: 768px) {
    padding: 60px;
  }
`;

const Layout = ({ children }: ComponentProps) => {
  return (
    <Container>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
