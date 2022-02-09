import React from 'react';
//Types
import { AnswerObject } from '../../types/Types';
//Styles
import { Wrapper } from './Score.styles';

type Props = {
  activity: string;
  userAnswers: AnswerObject[];
  startOver: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Score: React.FC<Props> = ({ activity, userAnswers, startOver }) => (
  <Wrapper>
    <h3 dangerouslySetInnerHTML={{ __html: activity }} />
    <h1>Results</h1>
    <ul>
      {userAnswers.map((answer: any) => {
        return (
          <li key={answer.question}>
            <span>{`Q${answer.number}`}</span>
            <span>{answer.correct ? 'true' : 'false'}</span>
          </li>
        );
      })}
    </ul>
    <button onClick={startOver}>Home</button>
  </Wrapper>
);

export default Score;
