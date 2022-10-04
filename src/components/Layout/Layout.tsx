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
