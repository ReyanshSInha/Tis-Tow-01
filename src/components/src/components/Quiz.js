import { useState, useEffect } from "react";
import ChemistryEasy from "../data/Chemistry-Easy";
import PhysicsEasy from "../data/Physics-Easy";
import MathsEasy from "../data/Maths-Easy";
import ChemistryMedium from "../data/Chemistry-Medium";
import ChemistryHard from "../data/Chemistry-Hard";
import PhysicsMedium from "../data/Physics-medium";
import PhysicsHard from "../data/Physics-Hard";
import MathsMedium from "../data/Maths-Medium";
import MathsHard from "../data/Maths-Hard";
import Timer from "./Timer";
import { useAuth0 } from "@auth0/auth0-react";
import TimeTracker from "./TimeTracker";

const timeData = []
const questionsThatUserAnswered = []
const questionExplanationData = []
const questionIndexTracker = []

const resultData = []

const Quiz = (props) => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [testState, setTestState] = useState(true)
    const [userAnswer, setUserAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds === 59) {
                setSeconds(0);
                setMinutes((prevMinutes) => prevMinutes + 1);
            } else {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [seconds]);

    const handleReset = () => {
        timeData.push(
            `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`)
        setSeconds(0);
        setMinutes(0);
        // console.log(resultData)
        // console.log(timeData)
        // console.log(questionsThatUserAnswered)
        // console.log(questionIndexTracker)
    };





    const { user, isAuthenticated } = useAuth0()

    let subject = props.subject
    let difficulty = props.difficulty
    let numQues = props.numberOfQuestion

    const dataBaseName = `${subject}${difficulty}`
    let dataBase = []

    switch (dataBaseName) {
        case "ChemistryEasy":
            dataBase = [...ChemistryEasy]
            break;
        case "PhysicsEasy":
            dataBase = [...PhysicsEasy]
            break;
        case "MathsEasy":
            dataBase = [...MathsEasy]
            break;
        case "ChemistryMedium":
            dataBase = [...ChemistryMedium]
            break;
        case "PhysicsMedium":
            dataBase = [...PhysicsMedium]
            break;
        case "MathsMedium":
            dataBase = [...MathsMedium]
            break;
        case "ChemistryHard":
            dataBase = [...ChemistryHard]
            break;
        case "PhysicsHard":
            dataBase = [...PhysicsHard]
            break;
        case "MathsHard":
            dataBase = [...MathsHard]
            break;
    }

    props.dataBaseSizeCollector(dataBase.length)

    const questionChangeHandler = () => {
        // console.log(dataBase.length)
        // console.log(questionNumber)
        // console.log(questionNumber)
        // console.log(numQues)

        handleReset()


        // let dataBaseSize = {dataBaseLength: dataBase.length}



        if (props.timer == -1) {
            // console.log("time matchis off")
            if ((questionNumber + 1) == numQues) {
                console.log(questionNumber)
                console.log(numQues)
                setTestState(false)
            } else {
                console.log("my name is reyansh")
                console.log("this is quesiton number: " + questionNumber)
                console.log("number of questions " + numQues)
                

                if (dataBase[questionNumber].answer === userAnswer) {
                    setScore(prevScore => prevScore + 1)
                }

                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(false)
                setQuestionNumber((prevState) => {
                    return prevState + 1;
                })
            }
        } else {
            if ((questionNumber + 1) === dataBase.length) {
                setTestState(false)
            } else {
                console.log(numQues)
                console.log(subject)
                console.log(difficulty)

                if (dataBase[questionNumber].answer === userAnswer) {
                    setScore(prevScore => prevScore + 1)
                }

                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(false)
                setQuestionNumber((prevState) => {
                    return prevState + 1;
                })
            }

        }
    }

    const submitTestHandler = () => {
        const quizData = { quizState: false, score: score, resultState: true, dataBaseSize: dataBase.length, resultData: resultData, timeData: timeData }
        props.quizDataCollector(quizData)
    }

    const timerDataCollector = (data) => {
        props.timerDataCollector(data)
    }

    const optionOneHandler = () => {
        setUserAnswer(dataBase[questionNumber].options[0])
        setOne(true)
        setTwo(false)
        setThree(false)
        setFour(false)
    }

    const optionTwoHandler = () => {
        setUserAnswer(dataBase[questionNumber].options[1])
        setOne(false)
        setTwo(true)
        setThree(false)
        setFour(false)
    }

    const optionThreeHandler = () => {
        setUserAnswer(dataBase[questionNumber].options[2])
        setOne(false)
        setTwo(false)
        setThree(true)
        setFour(false)
    }

    const optionFourHandler = () => {
        setUserAnswer(dataBase[questionNumber].options[3])
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(true)
    }

    

    useEffect(() => {
        const reusltObject = {
            questionIndex: questionNumber,
            question: dataBase[questionNumber].question,
            answer: dataBase[questionNumber].answer,
        }

        questionsThatUserAnswered.push(dataBase[questionNumber].question)
        questionIndexTracker.push(questionNumber)
        questionExplanationData.push(dataBase[questionNumber].answer)
        resultData.push(reusltObject)
    }, [questionNumber])

    

    useEffect(() => {
      
        // setQuestionNumber(prevState => {
        //     return prevState + 1;
        // })
        // cleanup this component

        const handleKeyDown = (event) => {
            console.log(event.key)
            if(testState){
            
                if(event.key === "Enter"){
                    console.log("this is my question number" + questionNumber)
                    console.log("this is the numques: " + numQues)
                    
                    questionChangeHandler()
                    
                }
            }else{
                submitTestHandler()
            }
    
            
        }
        document.addEventListener('keydown', handleKeyDown);

        // return () => {
        //   document.removeEventListener('keydown', handleKeyDown);
        // };
      }, []);
    

    return (
        <div className="QuizPanel">
            {/* <div>{ChemistryEasy.map((ques) => {
                return (<div> {ques.one} </div> ) 
            })}</div> */}
            <div className="details">
                <div className="det">{subject}</div>
                <div className="det">{difficulty}</div>
                <div className="det"> <div>
                    <h2>Timer:</h2>
                    <p>
                        {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                    {/* <button onClick={handleReset}>Reset</button> */}
                </div></div>

                {props.timer == -1 ? <div></div> : <Timer timerDataCollector={timerDataCollector} duration={props.timer * 60} />}

                {isAuthenticated && <div >{user.name}</div>}
            </div>
            
            <div className="question">{dataBase[questionNumber].question}</div>
            <div onClick={optionOneHandler} className={`opt ${one ? 'active' : ''}`}>{dataBase[questionNumber].options[0]}</div>
            <div onClick={optionTwoHandler} className={`opt ${two ? 'active' : ''}`}>{dataBase[questionNumber].options[1]}</div>
            <div onClick={optionThreeHandler} className={`opt ${three ? 'active' : ''}`}>{dataBase[questionNumber].options[2]}</div>
            <div onClick={optionFourHandler} className={`opt ${four ? 'active' : ''}`}>{dataBase[questionNumber].options[3]}</div>
            <div className="buttons">
                {props.timer == -1 ? <div className='count'>Question: {questionNumber + 1}/{numQues}</div> : <div></div>}
                {props.timer == -1 ? testState ?
                    <div onClick={questionChangeHandler} className="next">Next</div> :
                    <div onClick={submitTestHandler} className="next">Submit</div> : testState ?
                    <div onClick={questionChangeHandler} className="next">Next</div> :
                    <div onClick={submitTestHandler} className="next">Submit</div>}

            </div>
        </div>
    )
}

export default Quiz;