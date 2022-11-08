import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled from "styled-components";

import PagePaths from "../../utils/constants/pagePaths";

import Typography from "./Typography";

type ComponentProps = ContainerProps & {
  onClick?: VoidFunction;
};

interface ContainerProps {
  vertical?: boolean;
  inFooter?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  grid-gap: 32px;
  ${({ vertical, inFooter }) => vertical ? (`
    flex-direction: column;
    ${inFooter ? '' : 'align-items: center;'}
  `) : (`
    flex-direction: row;
  `)};
`;

const StyledTypography = styled(Typography)`
  font-weight: 500;
  line-height: 19px;
`;

interface StyledAnchorProps {
  activeIsBold: boolean;
}

const StyledAnchor = styled.a<StyledAnchorProps>`
  display: flex;
  & p {
    position: relative;
    ::before {
      ${({ activeIsBold }) => activeIsBold ? 'visibility: hidden;' : ''}
      transition: all 300ms;
      content: " ";
      height: 4px;
      width: 18px;
      position: absolute;
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.primary};
      opacity: 0;
    }
  }
  :hover, &.active {
    & p {
      ::before {
        opacity: 1;
      }
    }
  }
  &.active {
    & p {
      ${({ activeIsBold }) => activeIsBold ? 'font-weight: 700;' : ''}
    }
  }
`;

type CustomLinkProps = LinkProps & {
  children: ReactNode;
  onClick: VoidFunction;
  activeIsBold?: boolean;
  className?: string;
}

const CustomLink = (props: CustomLinkProps) => (
  <Link href={props.href} passHref>
    <StyledAnchor activeIsBold={props.activeIsBold} onClick={props.onClick} className={props.className}>
      <StyledTypography>
        {props.children}
      </StyledTypography>
    </StyledAnchor>
  </Link>
);

const NavigationLinks = ({ vertical, inFooter, onClick }: ComponentProps) => {
  const router = useRouter();

  return (
    <Container vertical={vertical} inFooter={inFooter}>
      <CustomLink
        activeIsBold={inFooter}
        href="/#what-we-do"
        onClick={onClick}
      >
        What we do
      </CustomLink>
      <CustomLink
        activeIsBold={inFooter}
        href="/#partners"
        onClick={onClick}
      >
        Partners
      </CustomLink>
      <CustomLink
        activeIsBold={inFooter}
        href={PagePaths.team}
        onClick={onClick}
        className={`${router.pathname === PagePaths.team ? 'active' : ''}`}
      >
        The Team
      </CustomLink>
      <CustomLink
        activeIsBold={inFooter}
        href={PagePaths.careers}
        onClick={onClick}
        className={`${router.pathname === PagePaths.careers ? 'active' : ''}`}
      >
        Careers
      </CustomLink>
      <CustomLink
        activeIsBold={inFooter}
        href="#contacts"
        onClick={onClick}
      >
        Contacts
      </CustomLink>
    </Container>
  );
};

export default NavigationLinks;
