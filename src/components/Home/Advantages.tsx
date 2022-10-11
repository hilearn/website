import { useRouter } from "next/router";
import styled from "styled-components";

import { homePageBlocksSpacing } from "../../sharedStyles";
import advantages from "../../utils/constants/advantages";
import Advantage from "../common/Advantage";
import BlockTitle from "../common/BlockTypography";
import Button from "../common/Button";

const Container = styled.div`
  ${homePageBlocksSpacing}
`;

const Content = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template: repeat(5, 1fr) / 1fr;
  grid-gap: 40px;
  ${({ theme }) => (`    
    @media (min-width: 545px) {
      grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoints.m}) {
      grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    }
  `)}
`;

  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3F1EA;
    border-radius: 16px;
    padding: 40px 8px;
  `;

const Advantages = () => {
  const router = useRouter();

  const handelPartnersClick = () => (
    router.push("#contacts")
  );
  return (
    <Container>
      <BlockTitle text="Our advantages" />
      <Content>
        {advantages.map((a, i) => (
          <Advantage
            key={a.title}
            queue={`0${i + 1}.`}
            title={a.title}
            description={a.description}
          />
        ))}
        <ButtonContainer>
          <Button onClick={handelPartnersClick}>Become a partner</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Advantages;
