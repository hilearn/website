import styled from "styled-components";

export const Smaller = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: block;
  }
`;

export const Larger = styled.div`
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
`;

export const FooterSmall = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.footer}) {
    display: block;
  }
`;

export const FooterLarger = styled.div`
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoints.footer}) {
    display: none;
  }
`;
