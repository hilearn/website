import { css } from "styled-components";

export const homePageResponsivePadding = css`
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 375px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const homePageBlocksSpacing = css`
  margin-top: 200px;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-top: 120px;
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
