import React, { useEffect, useState } from 'react'
import "../app.css";
import useSound from 'use-sound';
import play from "../assets/play.wav";
import correct from "../assets/correct.wav";
import wrong from "../assets/wrong.wav";

export default function Trivia({ data, quesNumber, setQuesNumber, timer, setTimer, moneyPyramid, earned, setEarned, timerInterval}) {
  const [letsPlay] = useSound(play);
  const [correctAns] = useSound(correct);
  const [wrongAns] = useSound(wrong);
  const [question, setQuestion] = useState(null);
  const [classname, setClassname] = useState("answer");
  const [disabledClassName,setDisabledClassName] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setQuestion(data[quesNumber - 1])
  }, [data, quesNumber]);


  useEffect(() => {
      letsPlay()
  }, [quesNumber])





  const handleClick = (ch) => {
    setSelectedAnswer(ch);
    setClassname("answer active");
    setDisabledClassName("answer disable")
    setClassname(ch.correct ? "answer correct" : "answer incorrect");
    setTimeout(() => {   // because animation is 3 seconds
      if (ch.correct) {
        setLoading(true);
        correctAns();
        setEarned(moneyPyramid[moneyPyramid.length - quesNumber].amount);
        clearInterval(timerInterval);
      } 
      else {
        wrongAns();
        setTimer(true);
      }
    }, 3000)

    setTimeout(() => {
      setLoading(false);
      ch.correct && setQuesNumber(prev => prev + 1);
      setSelectedAnswer(null);
    }, 9000)
  }

  return (
    // loading == true ? 
    // (<div className='congratsMsg'>Correct answer, loading next question</div> ):
    <div className='trivia'>
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map(ch => (
          <div className={selectedAnswer !== null ? (selectedAnswer === ch ? classname : disabledClassName):"answer"} onClick={() => handleClick(ch)} >{ch.text}</div>
        ))
        }
      </div>
    </div>
  )
}
