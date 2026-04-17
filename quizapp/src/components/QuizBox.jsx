import React from 'react'
import styles from './QuizBox.module.css'

export default function QuizBox({ quiz, selectedAnswers = {}, onAnswerChange }) {
  const handleOptionSelect = (questionId, optionIndex) => {
    if (onAnswerChange) {
      onAnswerChange(questionId, optionIndex)
    }
  }

  if (!quiz) {
    return <div className={styles.quizBox}>No quiz available</div>
  }

  const totalMarks = quiz.questions.reduce((sum, q) => sum + q.marks, 0)

  return (
    <div className={styles.quizBox}>
      <div className={styles.quizHeader}>
        <h2 className={styles.quizTitle}>{quiz.title}</h2>
        <div className={styles.quizInfo}>
          <span className={styles.totalQuestions}>{quiz.questions.length} Questions</span>
          <span className={styles.totalMarks}>Total Marks: {totalMarks}</span>
        </div>
      </div>

      <div className={styles.questionsContainer}>
        {quiz.questions.map((question, questionIndex) => (
          <div key={question.id} className={styles.questionCard}>
            <div className={styles.questionHeader}>
              <span className={styles.questionNumber}>Question {questionIndex + 1}</span>
              <span className={styles.questionMarks}>{question.marks} marks</span>
            </div>
            <h3 className={styles.questionText}>{question.question}</h3>
            
            <div className={styles.optionsContainer}>
              {question.options.map((option, optionIndex) => {
                const isSelected = selectedAnswers[question.id] === optionIndex
                return (
                  <div
                    key={optionIndex}
                    className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                    onClick={() => handleOptionSelect(question.id, optionIndex)}
                  >
                    <div className={styles.optionRadio}>
                      {isSelected && <div className={styles.radioDot}></div>}
                    </div>
                    <span className={styles.optionText}>{option}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}