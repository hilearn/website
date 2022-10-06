import styled from "styled-components";
import { hugeButtonContainer } from "../../sharedStyles";

import HugeButtonContent from "./HugeButtonContent";

interface ComponentProps {
  iconSrc: string;
  title: string;
  caption: string;
  additional?: string;
  withBottomGutter?: boolean;
}

interface StyledButtonProps {
  withBottomGutter: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  ${hugeButtonContainer}
  ${({ withBottomGutter }) => withBottomGutter && `
    margin-bottom: 16px;
  `}
`;

const HugeButton = (props: ComponentProps) => {
  const {
    iconSrc,
    title,
    caption,
    additional,
    withBottomGutter,
  } = props;
  return (
    <StyledButton withBottomGutter={withBottomGutter}>
      <HugeButtonContent
        iconSrc={iconSrc}
        title={title}
        caption={caption}
        additional={additional}
      />
    </StyledButton>
  );
};

export default HugeButton;
