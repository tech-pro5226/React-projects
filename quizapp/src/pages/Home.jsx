import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizBox from '../components/QuizBox'
import ReportCard from '../components/ReportCard'
import CustomeButton from '../components/CustomeButton'
import quizes from '../data/quizes'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [allAnswers, setAllAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(null)

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
    
    if (!loggedIn) {
      // Redirect to login after a brief moment
      setTimeout(() => {
        navigate('/login')
      }, 100)
    }
  }, [navigate])

  const handleAnswerChange = (quizId, questionId, optionIndex) => {
    setAllAnswers({
      ...allAnswers,
      [`${quizId}-${questionId}`]: optionIndex
    })
  }

  const handleNext = () => {
    if (currentQuizIndex < quizes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1)
    }
  }

  const handleSubmitQuiz = () => {
    // Calculate score
    let totalMarks = 0
    let obtainedMarks = 0
    const quizResults = []

    quizes.forEach(quiz => {
      quiz.questions.forEach(question => {
        totalMarks += question.marks
        const answerKey = `${quiz.id}-${question.id}`
        const selectedAnswer = allAnswers[answerKey]
        
        if (selectedAnswer !== undefined && selectedAnswer === question.correctAnswer) {
          obtainedMarks += question.marks
        }
        
        quizResults.push({
          quizId: quiz.id,
          quizTitle: quiz.title,
          questionId: question.id,
          question: question.question,
          correctAnswer: question.correctAnswer,
          selectedAnswer: selectedAnswer,
          isCorrect: selectedAnswer === question.correctAnswer,
          marks: question.marks
        })
      })
    })

    const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2)
    
    setScore({
      obtainedMarks,
      totalMarks,
      percentage,
      quizResults
    })
    setQuizCompleted(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('currentUser')
    setIsLoggedIn(false)
    navigate('/login')
  }

  if (!isLoggedIn) {
    return (
      <div className={styles.container}>
        <div className={styles.loginPrompt}>
          <h2>Please Login to Continue</h2>
          <p>You need to be logged in to access the quiz.</p>
          <CustomeButton 
            btnTxt="Go to Login" 
            handleClick={() => navigate('/login')}
          />
        </div>
      </div>
    )
  }

  if (quizCompleted && score) {
    return <ReportCard score={score} onRetake={() => {
      setQuizCompleted(false)
      setAllAnswers({})
      setCurrentQuizIndex(0)
      setScore(null)
    }} />
  }

  const isFirstQuiz = currentQuizIndex === 0
  const isLastQuiz = currentQuizIndex === quizes.length - 1
  const currentQuiz = quizes[currentQuizIndex]

  // Get answers for current quiz
  const currentQuizAnswers = {}
  if (currentQuiz) {
    currentQuiz.questions.forEach(question => {
      const answerKey = `${currentQuiz.id}-${question.id}`
      currentQuizAnswers[question.id] = allAnswers[answerKey]
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <span>Welcome, {JSON.parse(localStorage.getItem('currentUser') || '{}').username || 'User'}</span>
        </div>
        <CustomeButton 
          btnTxt="Logout" 
          handleClick={handleLogout}
          style={styles.logoutBtn}
        />
      </div>
      
      <div className={styles.quizNavigation}>
        <CustomeButton 
          btnTxt="Previous" 
          handleClick={isFirstQuiz ? () => {} : handlePrev}
          style={isFirstQuiz ? styles.disabled : ''}
        />
        <span className={styles.quizCounter}>
          Quiz {currentQuizIndex + 1} of {quizes.length}
        </span>
        <CustomeButton 
          btnTxt="Next" 
          handleClick={isLastQuiz ? () => {} : handleNext}
          style={isLastQuiz ? styles.disabled : ''}
        />
      </div>
      
      {currentQuiz && (
        <QuizBox 
          quiz={currentQuiz} 
          selectedAnswers={currentQuizAnswers}
          onAnswerChange={(questionId, optionIndex) => 
            handleAnswerChange(currentQuiz.id, questionId, optionIndex)
          }
        />
      )}
      
      {isLastQuiz && (
        <div className={styles.submitContainer}>
          <CustomeButton 
            btnTxt="Submit Quiz" 
            handleClick={handleSubmitQuiz}
            style={styles.submitBtn}
          />
        </div>
      )}
    </div>
  )
}