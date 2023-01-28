import "./app.css";
import { useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();


  const moneyPyramid = [
    {
      "id": 1,
      "amount": 200
    },
    {
      "id": 2,
      "amount": 400
    },
    {
      "id": 3,
      "amount": 600
    },
    {
      "id": 4,
      "amount": 800
    },
    {
      "id": 5,
      "amount": 1000
    },
    {
      "id": 6,
      "amount": 1500
    },
    {
      "id": 7,
      "amount": 2000
    },
    // {
    //   "id":8,
    //   "amount": 2500
    // },
    // {
    //   "id":9,
    //   "amount": 3000
    // },
    // {
    //   "id":10,
    //   "amount": 3500
    // },
    // {
    //   "id":11,
    //   "amount": 4000
    // },
    // {
    //   "id":12,
    //   "amount": 4500
    // },
    // {
    //   "id":13,
    //   "amount": 5000
    // },
    // {
    //   "id":14,
    //   "amount": 100000
    // },
    // {
    //   "id":15,
    //   "amount": 1000000
    // },
  ];


  moneyPyramid.reverse();

  const [quesNumber, setQuesNumber] = useState(1);
  const [timer, setTimer] = useState(false);
  const [earned, setEarned] = useState(0);

  const questionData = [
    {
      id: 1,
      question: "What is React.js?",
      answers: [
        {
          text: "Open-source JavaScript back-end library",
          correct: false
        },
        {
          text: " JavaScript front-end library to create a database",
          correct: false
        },
        {
          text: "Free and open-source JavaScript front-end library",
          correct: true
        },
        {
          text: "None of the mentioned",
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: "Which of the following acts as the input of a class-based component?",
      answers: [
        {
          text: "Class",
          correct: false
        },
        {
          text: "Props",
          correct: true
        },
        {
          text: "Factory",
          correct: false
        },
        {
          text: "None of the mentioned",
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: "React.js is written in which of the following language?",
      answers: [
        {
          text: "C",
          correct: false
        },
        {
          text: "C++",
          correct: false
        },
        {
          text: "JS",
          correct: true
        },
        {
          text: "Java",
          correct: false
        }
      ]
    },
    {
      id: 4,
      question: " How many elements can a valid react component return?",
      answers: [
        {
          text: "React doesn’t return element",
          correct: false
        },
        {
          text: "1 Element",
          correct: true
        },
        {
          text: "More than 1 element",
          correct: false
        },
        {
          text: "None of the mentioned",
          correct: false
        }
      ]
    },
    {
      id: 5,
      question: "In which of the following directory React Components are saved?",
      answers: [
        {
          text: "Inside js/components/",
          correct: true
        },
        {
          text: "Inside components/js/",
          correct: false
        },
        {
          text: "Inside vendor/js/components/",
          correct: false
        },
        {
          text: "Inside vendor/components/",
          correct: false
        }
      ]
    },
    {
      id: 6,
      question: "Which of the following command is used to Install create-react-app?",
      answers: [
        {
          text: "npm install create-react-app",
          correct: false
        },
        {
          text: "npm install -f create-react-app",
          correct: false
        },
        {
          text: "npm install -g create-react-app",
          correct: true
        },
        {
          text: "install -g create-react-app",
          correct: false
        }
      ]
    },
    {
      id: 7,
      question: "Which of the following is method is not a part of ReactDOM?",
      answers: [
        {
          text: "ReactDOM.hydrate()",
          correct: false
        },
        {
          text: "ReactDOM.destroy()",
          correct: true
        },
        {
          text: "ReactDOM.createPortal()",
          correct: false
        },
        {
          text: "All of the mentioned",
          correct: false
        }
      ]
    }
  ]


  return (
    <div className="app">
      <div className="main">
        {
          timer ? <div className="earning"><h1 className="endQuizText">You earned : ${earned}</h1><button type="button" className="startButton" onClick={() => navigate("/")}>Play again</button></div> : (
            <>
              <div className="top">
                <div className="timer"><Timer setTimer={setTimer} quesNumber={quesNumber} /></div>
              </div>
              <div className="bottom">
                <Trivia
                  data={questionData}
                  quesNumber={quesNumber}
                  setQuesNumber={setQuesNumber}
                  timer={timer}
                  setTimer={setTimer}
                  moneyPyramid={moneyPyramid}
                  setEarned={setEarned}
                />
              </div>
            </>
          )
        }
        </div>

        <div className="pyramid">
          <ul className="moneyList">
            {
              moneyPyramid.map((item) => (
                <li className={quesNumber === item.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{item.id}</span>
                  <span className="moneyListItemPrice">$ {item.amount}</span>
                </li>
              ))
            }
          </ul>
      </div>
    </div >
  );
}

export default App;
