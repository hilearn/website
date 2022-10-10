import styled from "styled-components";

import HugeButtonPanel from "../common/HugeButtonPanel";
import ListWithLabel from "../common/ListWithLabel";
import settings from '../../../public/images/settings.svg';
import Typography from "../common/Typography";

const Paragraph = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 20px;
`;

const ColouredSpan = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
`;

const OpenPositions = () => {
  return (
    <>
      <HugeButtonPanel
        iconSrc={settings}
        title="Front-end engineer"
        caption="Mid"
        additional="Yerevan, Armenia"
        withBottomGutter
      >
        <div>
          <Paragraph>
          HiLearn is looking for a well-rounded frontend developer that is proficient in creating engaging experiences
           and is familiar with all aspects of product development from ideation to implementation.
           You will play a critical part in the design, implementation, testing, and deployment of HiLearn's
           consumer facing products, you will be instrumental in the architecture and implementation of products
           handling millions of dollars' worth of financial transactions.
          </Paragraph>
          <ListWithLabel
            label="As a Front-End Engineer you will:"
            list={[
              'Build responsive experiences that function on all major browsers.',
              'Work alongside the product team to build out new product lines and iterate upon existing ones.',
              'Contribute to developing best practices for observability, continuous integration, and deployment.',
              'Consistently improve maintainability and stability of our codebase.',
              'Be a critical voice in design and code review.'
            ]}
          />
          <ListWithLabel
            label="The technology stack is:"
            list={[
              'React JS + Redux',
              'Typescript',
              'Webpack',
              'Nodejs'
            ]}
          />
          <ListWithLabel
            label="The following skills will be a plus:"
            list={[
              'Experience working with a design team and implementing from an agreed upon specification.',
              'Knowledge of version control software such as Git.',
              'Understanding of development workflows.',
              'Desire to learn and grow.',
              'Knowledge of English to communicate with team members abroad.',
              'Experience working from wireframes from tools such as Figma․',
              'Minimum BS degree in CS or related discipline, or a proven track record.'
            ]}
          />
          <Paragraph>
            For application please send your cv to
            {' '}
            <ColouredSpan as="span">
              jobs@hilearn.io
            </ColouredSpan>
          </Paragraph>
        </div>
      </HugeButtonPanel>
    </>
  );
};

export default OpenPositions;
