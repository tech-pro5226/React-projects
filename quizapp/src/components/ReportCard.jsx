import React from 'react'
import CustomeButton from './CustomeButton'
import styles from './ReportCard.module.css'

export default function ReportCard({ score, onRetake }) {
  if (!score) {
    return <div className={styles.reportCard}>No score available</div>
  }

  const { obtainedMarks, totalMarks, percentage, quizResults } = score
  
  // Group results by quiz
  const quizGroups = {}
  quizResults.forEach(result => {
    if (!quizGroups[result.quizId]) {
      quizGroups[result.quizId] = {
        quizTitle: result.quizTitle,
        questions: []
      }
    }
    quizGroups[result.quizId].questions.push(result)
  })

  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A+', color: '#27ae60' }
    if (percentage >= 80) return { grade: 'A', color: '#2ecc71' }
    if (percentage >= 70) return { grade: 'B+', color: '#3498db' }
    if (percentage >= 60) return { grade: 'B', color: '#9b59b6' }
    if (percentage >= 50) return { grade: 'C', color: '#f39c12' }
    return { grade: 'F', color: '#e74c3c' }
  }

  const gradeInfo = getGrade(parseFloat(percentage))

  return (
    <div className={styles.reportCard}>
      <div className={styles.reportHeader}>
        <h1 className={styles.reportTitle}>Quiz Results</h1>
        <div className={styles.scoreSummary}>
          <div className={styles.scoreCircle} style={{ borderColor: gradeInfo.color }}>
            <div className={styles.scorePercentage} style={{ color: gradeInfo.color }}>
              {percentage}%
            </div>
            <div className={styles.scoreGrade} style={{ color: gradeInfo.color }}>
              {gradeInfo.grade}
            </div>
          </div>
          <div className={styles.scoreDetails}>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Marks Obtained:</span>
              <span className={styles.scoreValue}>{obtainedMarks} / {totalMarks}</span>
            </div>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Total Questions:</span>
              <span className={styles.scoreValue}>{quizResults.length}</span>
            </div>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Correct Answers:</span>
              <span className={styles.scoreValue}>
                {quizResults.filter(r => r.isCorrect).length}
              </span>
            </div>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Wrong Answers:</span>
              <span className={styles.scoreValue}>
                {quizResults.filter(r => !r.isCorrect && r.selectedAnswer !== undefined).length}
              </span>
            </div>
            <div className={styles.scoreItem}>
              <span className={styles.scoreLabel}>Unanswered:</span>
              <span className={styles.scoreValue}>
                {quizResults.filter(r => r.selectedAnswer === undefined).length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.quizBreakdown}>
        <h2 className={styles.breakdownTitle}>Quiz Breakdown</h2>
        {Object.keys(quizGroups).map(quizId => {
          const quiz = quizGroups[quizId]
          const quizCorrect = quiz.questions.filter(q => q.isCorrect).length
          const quizTotal = quiz.questions.length
          
          return (
            <div key={quizId} className={styles.quizGroup}>
              <div className={styles.quizGroupHeader}>
                <h3 className={styles.quizGroupTitle}>{quiz.quizTitle}</h3>
                <span className={styles.quizGroupScore}>
                  {quizCorrect} / {quizTotal} correct
                </span>
              </div>
              <div className={styles.questionsList}>
                {quiz.questions.map((q, index) => (
                  <div 
                    key={q.questionId} 
                    className={`${styles.questionResult} ${q.isCorrect ? styles.correct : (q.selectedAnswer !== undefined ? styles.incorrect : styles.unanswered)}`}
                  >
                    <div className={styles.questionResultHeader}>
                      <span className={styles.questionResultNumber}>Q{index + 1}</span>
                      <span className={styles.questionResultStatus}>
                        {q.isCorrect ? '✓ Correct' : (q.selectedAnswer !== undefined ? '✗ Wrong' : '○ Unanswered')}
                      </span>
                      <span className={styles.questionResultMarks}>
                        {q.isCorrect ? `+${q.marks}` : '0'} marks
                      </span>
                    </div>
                    <p className={styles.questionResultText}>{q.question}</p>
                    {q.selectedAnswer !== undefined && (
                      <div className={styles.answerInfo}>
                        <span className={styles.selectedAnswer}>
                          Your Answer: Option {q.selectedAnswer + 1}
                        </span>
                        {!q.isCorrect && (
                          <span className={styles.correctAnswer}>
                            Correct Answer: Option {q.correctAnswer + 1}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.reportActions}>
        <CustomeButton 
          btnTxt="Retake Quiz" 
          handleClick={onRetake}
          style={styles.retakeBtn}
        />
      </div>
    </div>
  )
}