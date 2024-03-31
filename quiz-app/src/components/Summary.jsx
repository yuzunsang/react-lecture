import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  let [skippedCnt, correctCnt, incorrectCnt] = [0, 0, 0];

  userAnswers.map((userAnswer, idx) => {
    if (userAnswer === null) skippedCnt++;
    else if (userAnswer === QUESTIONS[idx].answers[0]) correctCnt++;
    else incorrectCnt++;
  });

  // console.log([skippedCnt, correctCnt, incorrectCnt]);

  // userAnswers
  // 1. skip => null
  // 2. 오답 및 정답 => string
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="trophy image" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.round((skippedCnt / userAnswers.length) * 100)}%
          </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.round((correctCnt / userAnswers.length) * 100)}%
          </span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">
            {Math.round((incorrectCnt / userAnswers.length) * 100)}%
          </span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((userAnswer, idx) => {
          let cssClasses = "user-answer";

          if (userAnswer === null) {
            cssClasses += " skipped";
          } else if (userAnswer === QUESTIONS[idx].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={idx}>
              <h3>{idx + 1}</h3>
              <p className="question">{QUESTIONS[idx].text}</p>
              <p className={cssClasses}>{userAnswer ?? "You skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
