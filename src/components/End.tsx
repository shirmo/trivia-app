import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { startGame } from '../store/triviaSlice';

const End: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state.trivia.data;
  });
  const questionsAmount = data.length;
  const anwerLog = useSelector((state: RootState) => {
    return state.trivia.userAnswers;
  });
  const onClick = (e: any) => {
    dispatch(startGame())
  }

  let correctAnswersAmount = 0;
  anwerLog.forEach((answer) => {
    if (data[answer.questionId].correct === answer.answerId) {
        console.log('Queen')
      correctAnswersAmount++;
    }
  });
  return (
    <header className='end'>
      {correctAnswersAmount / questionsAmount <= 0.25 && (
        <h1>Nice Try But Bad Performance</h1>
      )}
      {correctAnswersAmount / questionsAmount > 0.25 &&
        correctAnswersAmount / questionsAmount <= 0.7 && <h1>Good For You</h1>}
      {correctAnswersAmount / questionsAmount > 0.7 &&
        correctAnswersAmount / questionsAmount <= 1 && <h1>Amazinggggggggg</h1>}
      <h2>
        {correctAnswersAmount} Out of {questionsAmount}
      </h2>
      <button onClick={onClick}>Start Over and Try Again</button>
    </header>
  );
};

export default End;
