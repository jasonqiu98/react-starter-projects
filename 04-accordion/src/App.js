import React from 'react'
import questions from './data'
import Question from './Question'

const App = () => {
  return (
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => (
          <Question key={question.id} {...question}/>
        ))}
      </section>
    </div>
  )
}

export default App