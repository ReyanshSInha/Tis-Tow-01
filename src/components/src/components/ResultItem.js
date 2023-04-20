import { useState } from "react"


const ResultItem = (props) => {

    const [dropdownState, setDropdownState] = useState(false)

    const dropdownHandler = () => {
        setDropdownState((prevState) => {
            return !prevState
        })
    }

    return (
        <>
            <div className="ResultPanel">
                <div onClick={dropdownHandler} className="QuestionBox">
                    <div>{props.questionNumber}</div>
                    <div className="ques">{props.question}</div>
                    <div className="time">{props.time}mins</div>
                    <div className="dropButton" onClick={dropdownHandler}>v</div>
                </div>
            </div>
            {dropdownState && <div className="DropdownBox">
                {props.answer}
            </div>}
        </>)


}

export default ResultItem