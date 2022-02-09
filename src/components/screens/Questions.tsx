import React from 'react';
//Styles
import { Wrapper, ButtonWrapper } from './Questions.styles';

type Props = {
  activity: string;
  number: number;
  question: any;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonsArray: string[];
};

const Questions: React.FC<Props> = ({
  activity,
  number,
  question,
  callback,
  buttonsArray,
}) => (
  <Wrapper key={activity}>
    <h3 dangerouslySetInnerHTML={{ __html: activity }} />
    <h1>{`Q${number + 1}`}</h1>
    <p dangerouslySetInnerHTML={{ __html: question?.stimulus }} />
    <ButtonWrapper>
      {buttonsArray.map((button) => (
        <button key={button} value={button} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: button }} />
        </button>
      ))}
    </ButtonWrapper>
  </Wrapper>
);

export default Questions;
