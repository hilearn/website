import { ReactNode, useState } from "react";
import styled from "styled-components";
import { hugeButtonContainer } from "../../sharedStyles";

import HugeButtonContent from "./HugeButtonContent";

interface ComponentProps {
  iconSrc: string;
  title: string;
  caption: string;
  children: ReactNode;
  open?: boolean;
  additional?: string;
  withBottomGutter?: boolean;
}

interface ContainerProps {
  withBottomGutter: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: none;
  background-color: #fff;
  width: 100%;
  ${({ withBottomGutter }) => withBottomGutter && `
    margin-bottom: 16px;
  `}
`;

const StyledButton = styled.button`
  ${hugeButtonContainer}
  cursor: pointer;
`;

const PanelInfo = styled.div`
  padding: 24px;
`;

const HugeButtonPanel = (props: ComponentProps) => {
  const {
    iconSrc,
    title,
    caption,
    children,
    open = false,
    additional,
    withBottomGutter,
  } = props;

  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container withBottomGutter={withBottomGutter}>
      <StyledButton onClick={handleToggle}>
        <HugeButtonContent
          iconSrc={iconSrc}
          title={title}
          caption={caption}
          additional={additional}
          open={isOpen}
        />
      </StyledButton>
      {isOpen && (
        <PanelInfo>
          {children}
        </PanelInfo>
      )}
    </Container>
  );
};

export default HugeButtonPanel;
