import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ICheckedAnswer from '../models/ICheckedAnswer';
import { RootState } from '../store';
import { updateChosenAnswer } from '../store/triviaSlice';

interface IProps {
  answer: string;
  payload: ICheckedAnswer;
}

const Answer: React.FC<IProps> = ({answer, payload }) => {
  const dispatch = useDispatch();
  const answerLog = useSelector((state: RootState) => {
    return state.trivia.userAnswers;
  });
  let checked = false;
  answerLog.forEach((answer) => {
    if (
      answer.questionId === payload.questionId &&
      answer.answerId === payload.answerId
    ) {
      checked = true;
    }
  });

  const onChange = (e: any) => {
    dispatch(updateChosenAnswer(payload));
    checked = true;
  };

  return (
    <div>
      <input onChange={onChange} type='radio' name='answer' checked={checked} />
      {answer}
    </div>
  );
};

export default Answer;
