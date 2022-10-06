import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import Typography from "./Typography";

const Container = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template: 1fr / repeat(5, 1fr);
`;

const StyledTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

type CustomLinkProps = LinkProps & {
  children: ReactNode;
}

const CustomLink = (props: CustomLinkProps) => (
  <Link {...props} passHref>
    <a>
      <StyledTypography>
        {props.children}
      </StyledTypography>
    </a>
  </Link>
)

const NavigationLinks = () => {
  return (
    <Container>
      <CustomLink href="/w">
        What we do
      </CustomLink>
      <CustomLink href="/team">
        The Team
      </CustomLink>
      <CustomLink href="/careers">
        Careers
      </CustomLink>
      <CustomLink href="/w">
        Partners
      </CustomLink>
      <CustomLink href="/w">
        Contacts
      </CustomLink>
    </Container>
  );
};

export default NavigationLinks;
