import { css } from "styled-components";

export const homePageResponsivePadding = css`
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 600px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const homePageBlocksSpacing = css`
  padding-top: 200px;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    padding-top: 120px;
  }
`;

export const hugeButtonContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;
  width: 100%;
`;

export const clearDefaultButtonStyles = css`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
`;

export const responsiveAlignment = css`
  width: 100%;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.blockAlignCenter}) {
    text-align: start;
  }
`;
