import ResultItem from "./ResultItem"

const finalResultData = []

const Result = (props) => {

    const retestHandler = () => {
        let resultData = { resultState: false }
        props.resultDataCollector(resultData)
    }

    for (let i = 0; i < props.resultData.length; i++) {
        const finalExplanationObject = {
            questionData: props.resultData[i],
            userTimeForThisQuestion: props.timeData[i]
        }
        finalResultData.push(finalExplanationObject)
    }

    console.log(finalResultData)

    return (
        <>
            <div className="resultPanel">
                <div className="score">{props.score}/{props.numberOfQuestion}</div>
                <div className="resultButtons">
                    <div onClick={retestHandler} className="retest">Take Another Test</div>
                </div>
            </div>
        <div className="QuestionList">
                {finalResultData.map((questionItem) => {
                    return <ResultItem key={questionItem.questionData.questionIndex + 1} answer={questionItem.questionData.answer} time={questionItem.userTimeForThisQuestion} question={questionItem.questionData.question} questionNumber={questionItem.questionData.questionIndex + 1} />
                })}
            </div>
        </>

    )
}
export default Result;