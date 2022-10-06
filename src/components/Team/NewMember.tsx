import styled from "styled-components";
import Button from "../common/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 213px;
  height: 213px;
  border-radius: 16px;
`;

const NewMember = () => {
  return (
    <Container>
      <Button withoutIcon>
        Join our team
      </Button>
    </Container>
  );
};

export default NewMember;
