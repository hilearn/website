import styled from "styled-components";

import Typography from "./Typography";

interface ComponentProps {
  label: string;
  list: string[];
}

const StyledLabel = styled(Typography)`
  font-weight: 700;
  line-height: 24px;
`;

const StyledListItem = styled(Typography)`
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ListWithLabel = ({ label, list }: ComponentProps) => {
  return (
    <div>
      <StyledLabel>
        {label}
      </StyledLabel>
      <ul>
        {list.map((l) => (
          <StyledListItem key={l} as="li">
            {l}
          </StyledListItem>
        ))}
      </ul>
    </div>
  );
};

export default ListWithLabel;
