import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import Typography from "./Typography";

type ComponentProps = ContainerProps & {
  onClick?: VoidFunction;
};

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
  onClick: VoidFunction;
}

const CustomLink = (props: CustomLinkProps) => (
  <Link {...props} passHref>
    <a onClick={props.onClick}>
      <StyledTypography>
        {props.children}
      </StyledTypography>
    </a>
  </Link>
)

const NavigationLinks = ({ vertical, onClick }: ComponentProps) => {
  return (
    <Container vertical={vertical}>
      <CustomLink href="/w" onClick={onClick}>
        What we do
      </CustomLink>
      <CustomLink href="/team" onClick={onClick}>
        The Team
      </CustomLink>
      <CustomLink href="/careers" onClick={onClick}>
        Careers
      </CustomLink>
      <CustomLink href="/w" onClick={onClick}>
        Partners
      </CustomLink>
      <CustomLink href="/w" onClick={onClick}>
        Contacts
      </CustomLink>
    </Container>
  );
};

export default NavigationLinks;
