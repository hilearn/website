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
