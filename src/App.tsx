import React, { useState, useEffect } from 'react';
import _ from 'lodash';
//Constants
import { BUTTONS_ARRAY, TOTAL_QUESTIONS } from './constants';
//Styles
import { GlobalStyle } from './App.styles';
//Components
import Questions from './components/screens/Questions';
import Home from './components/screens/Home';
import Score from './components/screens/Score';
//Utils
import { sortArray } from './utils';
//Types
import {
  QuizData,
  Question,
  Activity,
  AnswerObject,
  Screen,
} from './types/Types';

const App = () => {
  const [screen, setScreen] = useState<Screen>('HOME');
  const [loading, setLoading] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizData | any>({});
  const [heading, setHeading] = useState<string>('');
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState<String | any>('Activity One');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<any>([]);
  const [gameOver, setGameOver] = useState<boolean>(true);

  //start by fetching quiz data
  useEffect(() => {
    setLoading(true);
    setGameOver(false);

    fetch('/interview.mock.data/payload.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuizData(data);
        setHeading(data.name);
        setActivities(data.activities);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    // console.log('number--->', number);
    // console.log('userAnswers.length--->', userAnswers.length);
    if (!gameOver && userAnswers.length === TOTAL_QUESTIONS) {
      setScreen('SCORE');
      setGameOver(true);
    }
  }, [userAnswers, gameOver]);
  //console.log('screen--->', screen);

  //restrict all handleClicks to be exclusively on HTMLButton elements
  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('event.currentTarget.value--->');
    // console.log(event.currentTarget.value);
    console.log('checking answernow-->');
    if (!gameOver) {
      //user answer
      const answer = event.currentTarget.value === 'CORRECT' ? true : false;
      //check answer with correct answer
      const correct = questions[number].is_correct === answer;
      const answerObject = {
        number: number + 1,
        question: questions[number].stimulus,
        answer,
        correct,
        correct_answer: questions[number].feedback,
      };
      console.log('answerObject--->');
      console.log({ ...answerObject });
      //save answer in the array for user user answers
      //@ts-ignore
      setUserAnswers((prev) => {
        console.log('setUserAnswers--->');
        console.log(prev.concat([answerObject]));
        return prev.concat([answerObject]);
      });
      setNumber(number + 1);
    }
  };

  const getQuestions = () => {
    console.log('quizData--->', quizData);
    const activityArray = _.filter(quizData.activities, {
      activity_name: activity,
    });
    //return the filtered array's first element (as there're only two activity elements)
    const questions = activityArray[0].questions;
    return sortArray(questions);
  };

  const selectActivity = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // console.log('event.selectActivity--->');
    // console.log(event.currentTarget.textContent);
    const selectedActivity = event.currentTarget.textContent || null;
    if (!gameOver) {
      setActivity(selectedActivity);
      const questions = getQuestions();
      setQuestions(questions);
      setNumber(number);
      setScreen('QUESTION');
      console.log('selected activity questions --->');
      console.log(getQuestions());
    }
  };

  const startOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    setScreen('HOME');
    setGameOver(false);
    setNumber(0);
    setQuestions([]);
    setUserAnswers([]);
  };

  return (
    <>
      <GlobalStyle />
      {loading && <span>Loading...</span>}

      {screen === 'HOME' && (
        <Home
          heading={heading}
          activities={activities}
          selectActivity={selectActivity}
        />
      )}
      {/* {console.log('selectedActivity-->', activity)} */}

      {screen === 'QUESTION' && (
        <Questions
          activity={activity}
          number={number}
          question={questions[number]}
          callback={checkAnswer}
          buttonsArray={BUTTONS_ARRAY}
        />
      )}

      {/* {console.log('userAnswers--->', userAnswers)} */}
      {screen === 'SCORE' && (
        <Score
          activity={activity}
          userAnswers={userAnswers}
          startOver={startOver}
        />
      )}
    </>
  );
};

export default App;
