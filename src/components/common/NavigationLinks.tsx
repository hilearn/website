import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import Typography from "./Typography";

type ComponentProps = ContainerProps;

interface ContainerProps {
  vertical?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-gap: 32px;
  ${({ vertical }) => vertical ? (`
    grid-template: repeat(5, 1fr) / 1fr;
  `) : (`
    grid-template: 1fr / repeat(5, 1fr);
  `)}
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

const NavigationLinks = ({ vertical }: ComponentProps) => {
  return (
    <Container vertical={vertical}>
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
