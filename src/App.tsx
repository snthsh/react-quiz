import React, { useState, useEffect } from 'react';
import _ from 'lodash';
//Constants
import { BUTTONS_ARRAY, TOTAL_QUESTIONS, API_URL } from './constants';
//Styles
import { GlobalStyle } from './App.styles';
//Components
import Questions from './components/screens/Questions';
import Home from './components/screens/Home';
import Score from './components/screens/Score';
//Utils
import { sortArray } from './utils';
//Types
import { QuizData, Question, Screen } from './types/Types';

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

    fetch(API_URL, {
      method: 'GET',
      headers: {
        'access-control-allow-origin': '*',
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
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
    if (!gameOver && userAnswers.length === TOTAL_QUESTIONS) {
      setScreen('SCORE');
      setGameOver(true);
    }
  }, [userAnswers, gameOver]);

  //restrict all handleClicks to be exclusively on HTMLButton elements
  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
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
      //save answer in the array for user user answers
      //@ts-ignore
      setUserAnswers((prev) => {
        return prev.concat([answerObject]);
      });
      setNumber(number + 1);
    }
  };

  const getQuestions = () => {
    const activityArray = _.filter(quizData.activities, {
      activity_name: activity,
    });
    //return the filtered array's first element (as there're only two activity elements)
    const questions = activityArray[0].questions;
    return sortArray(questions);
  };

  const selectActivity = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const selectedActivity = event.currentTarget.textContent || null;
    if (!gameOver) {
      setActivity(selectedActivity);
      const questions = getQuestions();
      setQuestions(questions);
      setNumber(number);
      setScreen('QUESTION');
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

      {screen === 'QUESTION' && (
        <Questions
          activity={activity}
          number={number}
          question={questions[number]}
          callback={checkAnswer}
          buttonsArray={BUTTONS_ARRAY}
        />
      )}

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
