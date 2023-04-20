import logo from './logo.svg';
import './App.css';
import UserPref from './components/UserPref';
import Quiz from './components/Quiz';
import { useState } from 'react';
import Result from './components/result';


function App() {
  const [quizState, setQuizState] = useState(false)
  const [subject, setSubject] = useState("Physics")
  const [difficulty, setDifficulty] = useState("Easy")
  const [numberOfQuestion, setNumberOfQuestion] = useState(5)
  const [resultState, setResultState] = useState(false)
  const [score, setScore] = useState(0)
  const [duration, setDuration] = useState(-1)
  const [dataBaseSize, setDataBaseSize] = useState(0)
  const [resultData, setResultData] = useState([])
  const [timeData, setTimeData] = useState([])


  const userPrefCollector = (data) => {
    setSubject(data.subject)
    setDifficulty(data.difficulty)
    setNumberOfQuestion(data.numberOfQuestion)
    setQuizState(data.quizState)
    setDuration(data.duration)
  }

  const quizDataCollector = (data) => {
    setQuizState(data.quizState)
    setScore(data.score)
    setResultState(data.resultState)
    setDataBaseSize(data.dataBaseSize)
    setResultData(data.resultData)
    setTimeData(data.timeData)
  }

  const dataBaseSizeCollector = (data) => {
    setDataBaseSize(data)
  }

  const resultDataCollector = (data) => {
    setResultState(data.resultState)
  }

  const timerDataCollector = (data) => {
    setResultState(data.resultState )
    setQuizState(data.quizState)
  }

  let totalQuestion

  if(duration == -1){
    totalQuestion = numberOfQuestion
  }else{
    totalQuestion = dataBaseSize
  }
 
  return (
    <div className="App">
      {resultState ? <Result timeData={timeData} resultData={resultData} resultDataCollector={resultDataCollector} score={score} numberOfQuestion={totalQuestion}/> :
      quizState ? 
      <Quiz dataBaseSizeCollector={dataBaseSizeCollector} timer={duration} timerDataCollector={timerDataCollector} quizDataCollector={quizDataCollector} subject={subject} difficulty={difficulty} numberOfQuestion={numberOfQuestion}/> : 
      <UserPref dataCollector={userPrefCollector}/>
      }

      
    </div>
  );
}

export default App;
