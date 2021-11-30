import React from 'react';
import { useSelector } from 'react-redux';
import ICheckedAnswer from '../models/ICheckedAnswer';
import { RootState } from '../store';
import Answer from './Answer';

const Question: React.FC = () => {
  const currentQuestion = useSelector((state: RootState) => {
    return state.trivia.questionIndex;
  });
  const questionData = useSelector((state: RootState) => {
    return state.trivia.data[state.trivia.questionIndex];
  });

  const question = questionData.question;
  const answers = questionData.answers;

  return (
    <div>
      <h2>Question no. {currentQuestion + 1}</h2>
      <h3>{question}</h3>
      {answers.map((answer, index) => {
        const payload: ICheckedAnswer = {
          questionId: currentQuestion,
          answerId: index,
        };
        const uniqueVal = `${currentQuestion}_${index}`
        return (
          <div key = {uniqueVal}>
          <Answer
            answer={answer}
            payload={payload}
          />
          </div>
        );
      })}
    </div>
  );
};

export default Question;
