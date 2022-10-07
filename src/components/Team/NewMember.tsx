import { useRouter } from "next/router";
import styled from "styled-components";

import Button from "../common/Button";
import question_sign from '../../../public/images/question_sign.svg';
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 213px;
  height: 213px;
  border-radius: 16px;
  position: relative;
`;

const StyledQuestionSign = styled.div`
  position: absolute;
`;

const StyledQuestionSign1 = styled(StyledQuestionSign)`
  top: 10px;
  right: 10px;
  transform: rotate(10deg);
`;
const StyledQuestionSign2 = styled(StyledQuestionSign)`
  bottom: 20px;
  left: 35px;
  transform: rotate(-20deg);
`;

const NewMember = () => {
  const router = useRouter();

  const handleGoToCareers = () => {
    router.push('/careers');
  };

  return (
    <Container>
      <StyledQuestionSign1>
        <Image src={question_sign} alt="" width={43} height={63} /> 
      </StyledQuestionSign1>
      <StyledQuestionSign2>
        <Image src={question_sign} alt="" width={50} height={72} />
      </StyledQuestionSign2>
      <Button withoutIcon onClick={handleGoToCareers}>
        Join our team
      </Button>
    </Container>
  );
};

export default NewMember;
