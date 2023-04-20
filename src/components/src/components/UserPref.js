import { useState } from "react"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"


const UserPref = (props) => {

    const [subject, setSubject] = useState("Physics")
    const [difficulty, setDifficulty] = useState("Easy")
    const [numberOfQuestion, setNumberOfQuestion] = useState(5)
    const [duration, setDuration] = useState(-1)

    const { isAuthenticated, user } = useAuth0()

    const subjectHandler = (event) => {
        setSubject(event.target.value)
    }

    const difficultyHandler = (event) => {
        setDifficulty(event.target.value)
    }

    const numQuesHandler = (event) => {
        setNumberOfQuestion(event.target.value)
    }

    const timerHandler = (event) => {
        setDuration(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const userPrefs = {subject: subject, difficulty: difficulty, numberOfQuestion: numberOfQuestion, quizState: true, duration: duration}
        props.dataCollector(userPrefs)
    }

   return <div className="UserInput">
        <form>
            <label htmlFor="subject">Enter the subjects</label>
            <select defaultValue="Physics" onChange={subjectHandler} name="subject" id="subject">
                <option value="Physics" >Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Maths">Maths</option>
            </select>
            <br/>
            <label htmlFor="difficulty">Choose a difficulty</label>
            <select onChange={difficultyHandler} name="difficulty" id="difficulty">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <br/>
            <label htmlFor="numberOfQuestions">Choose number of Questions</label>
            <select onChange={numQuesHandler} name="numberOfQuestion" id="numberOfQuestion">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            <br/>
            <label htmlFor="timer">Choose Time</label>
            <select onChange={timerHandler} name="timer" id="timer">
                <option value="-1">No Time Constraint</option>
                <option value="0.1">0.1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            <br/>
            <button onClick={submitHandler}>Start Test</button>
            { isAuthenticated ? <LogoutButton/> : <LoginButton/> }
            {/* <LoginButton/>
            <LogoutButton/> */}
            { isAuthenticated && <div>{user.name}</div>}
        </form>
   </div>
}

export default UserPref;