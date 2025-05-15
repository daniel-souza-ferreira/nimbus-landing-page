import React from 'react'

import { useState } from 'react';
import { Element } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';

import './Faq.css';

import questionMark from '/question-mark.png';

import faqData from '../../assets/faq.json';

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const handleAnswer = (questionId) => {
    setActiveId(prevId => prevId === questionId ? null : questionId);
  }

  const getQuestionAnswer = (questionId) => {
    return faqData.find(faq => faq.id === questionId)?.answer;
  }

  return (
    <Element name="faq-section">
      <div className='faq-container'>
          <section>
            <h2>Perguntas frequentes</h2>
            <div className="question-container">
              <div className="questions">
                <ul>
                  {faqData && faqData.map(({ id, question }) => (
                    <li 
                      className={`faq-question ${activeId === id ? "question-active" : ""}`}
                      key={id}
                      onClick={() => handleAnswer(id)}
                    >
                      <p>{question}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="answer">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeId}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: .2 }}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0},
                      exit: { opacity: 0 }
                    }}
                  >
                    {activeId && (<p>{getQuestionAnswer(activeId)}</p>)}
                    {!activeId && (<img src={questionMark} alt='question-mark'></img>)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>  
      </div>
    </Element>
  )
}

export default Faq