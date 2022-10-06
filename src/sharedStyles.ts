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

export const hugeButtonContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  border: none;
  background-color: #fff;
  width: 100%;
`;
