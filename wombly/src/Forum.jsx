
import React, { useState, useEffect } from 'react';
import QuestionForm from './Form';
import QuestionList from './List';

const Forum = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions'));
    if (storedQuestions) {
      setQuestions(storedQuestions);
    } else {
      const demoQuestions = [
        {
          question: "How can I cope with anxiety?",
          responses: [
            { user: "User 12", response: "Practice deep breathing exercises regularly." },
            { user: "User 13", response: "Consider seeking therapy for professional support." }
          ],
        },
        {
          question: "What are some tips for better mental health?",
          responses: [],
        },
      ];
      setQuestions(demoQuestions);
      localStorage.setItem('questions', JSON.stringify(demoQuestions));
    }
  }, []);

  const handleSubmitQuestion = (question) => {
    const newQuestions = [...questions, { question, responses: [] }];
    setQuestions(newQuestions);
    localStorage.setItem('questions', JSON.stringify(newQuestions));
  };

  const handleAddResponse = (index, response) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].responses.push({ user: "You", response });
    setQuestions(updatedQuestions);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Anonymous Question Forum</h1>
      <QuestionForm onSubmit={handleSubmitQuestion} />
      <QuestionList questions={questions} onAddResponse={handleAddResponse} />
    </div>
  );
};

export default Forum;
