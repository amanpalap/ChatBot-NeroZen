import React, { useState } from 'react';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: ''
  });

  const correctAnswers = {
    q1: 'd',
    q2: 'c',
    q3: 'c',
    q4: 'd',
    q5: 'd',
    q6: 'a',
    q7: 'd',
    q8: 'b',
    q9: 'a',
    q10: 'b',
    q11: 'a',
    q12: 'd',
    q13: 'b',
    q14: 'a',
    q15: 'a'
  };

  const questions = [
    {
      text: 'While brushing your teeth or doing your dishes, what is the best way to conserve water?',
      options: {
        a: 'Use a lot of toothpaste or soap',
        b: 'Leave the water running',
        c: 'Wear gloves so that you don’t get wet',
        d: 'Turn off the water when you are not using it'
      },
      key: 'q1'
    },
    {
      text: 'Ensuring availability of water for future generations is a',
      options: {
        a: 'Strategy of water conservation',
        b: 'Key activity of water conservation',
        c: 'Goal of water conservation',
        d: 'None of the above'
      },
      key: 'q2'
    },
    {
      text: 'Water conservation means',
      options: {
        a: 'Using as much water as you can',
        b: 'Wasting water',
        c: 'Using water efficiently',
        d: 'Polluting water'
      },
      key: 'q3'
    },
    {
      text: 'Which of the following is an example of conserving water at home?',
      options: {
        a: 'Taking a bath every day',
        b: 'Watering the lawn daily',
        c: 'Leaving the water running while washing dishes',
        d: 'Turning off the tap while brushing your teeth'
      },
      key: 'q4'
    },
    {
      text: 'Which one of the following statements is true?',
      options: {
        a: 'Water is an unlimited resource',
        b: 'Freshwater is abundant and easily accessible',
        c: 'Water conservation is not important',
        d: 'Only 1% of the Earth\'s water is readily available for human use'
      },
      key: 'q5'
    },
    {
      text: 'Which of the following activities uses the most water?',
      options: {
        a: 'Taking a shower',
        b: 'Washing clothes',
        c: 'Washing dishes',
        d: 'Watering the lawn'
      },
      key: 'q6'
    },
    {
      text: 'What is a simple way to save water when taking a shower?',
      options: {
        a: 'Using a lot of soap',
        b: 'Taking a long shower',
        c: 'Leaving the water running',
        d: 'Turning off the water while soaping up'
      },
      key: 'q7'
    },
    {
      text: 'Which of the following household chores can waste the most water if not managed properly?',
      options: {
        a: 'Vacuuming the floor',
        b: 'Washing the car with a hose',
        c: 'Dusting the furniture',
        d: 'Wiping the windows with a cloth'
      },
      key: 'q8'
    },
    {
      text: 'How can you reduce water usage in your garden?',
      options: {
        a: 'Watering plants during the cooler parts of the day',
        b: 'Watering plants frequently in the heat',
        c: 'Watering plants from a great height',
        d: 'Watering plants with a large amount of water at once'
      },
      key: 'q9'
    },
    {
      text: 'What is the main reason for installing a low-flow showerhead?',
      options: {
        a: 'Increase water pressure',
        b: 'Reduce water usage',
        c: 'Make the water hotter',
        d: 'Provide a massaging effect'
      },
      key: 'q10'
    },
    {
      text: 'Why should you fix leaky faucets promptly?',
      options: {
        a: 'To save water and reduce your water bill',
        b: 'To prevent water from evaporating',
        c: 'To keep the sink clean',
        d: 'To avoid making noise'
      },
      key: 'q11'
    },
    {
      text: 'Which of the following practices can help conserve water in the kitchen?',
      options: {
        a: 'Using running water to thaw frozen food',
        b: 'Using a dishwasher for a small number of dishes',
        c: 'Leaving the tap running while scrubbing vegetables',
        d: 'Collecting excess water and using it for plants'
      },
      key: 'q12'
    },
    {
      text: 'What is the purpose of installing dual-flush toilets?',
      options: {
        a: 'To use more water for flushing',
        b: 'To give the option of using less water for liquid waste',
        c: 'To reduce the number of flushes',
        d: 'To improve toilet efficiency'
      },
      key: 'q13'
    },
    {
      text: 'Which of the following methods is effective in reducing water usage?',
      options: {
        a: 'Fixing leaks promptly',
        b: 'Using a power washer for small jobs',
        c: 'Watering plants at midday',
        d: 'Running the dishwasher half full'
      },
      key: 'q14'
    },
    {
      text: 'What is a benefit of using mulch in your garden?',
      options: {
        a: 'It helps retain soil moisture',
        b: 'It makes the soil dry faster',
        c: 'It repels insects',
        d: 'It requires frequent watering'
      },
      key: 'q15'
    }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({
      ...answers,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all questions have been answered
    const allAnswered = Object.values(answers).every(answer => answer !== '');
    if (!allAnswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    let score = 0;
    for (let question in answers) {
      if (answers[question] === correctAnswers[question]) {
        score++;
      }
    }
    alert(`You scored ${score} out of 15`);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className='flex flex-wrap items-center justify-center mt-10 bg-black bg-opacity-0 full'>
      <form className='flex flex-wrap items-center w-full max-w-3xl p-2 mx-4 mt-10 bg-white border-2 shadow-lg h-96 md:h-80 lg:h-96 md:p-4 lg:p-4 bg-opacity-80 sm:w-full md:w-2/3 lg:w-2/3' onSubmit={handleSubmit}>
        <section className='grid items-baseline justify-center grid-cols-1 mb-4'>
          <label className='w-full mb-10 text-lg font-bold top-3'>
            {`Q-${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].text}`}
          </label>
          <div className='grid items-center w-full grid-cols-1 gap-2 px-6'>
            {Object.entries(questions[currentQuestionIndex].options).map(([key, option]) => (
              <span className='flex items-center' key={key}>
                <input
                  id={`${questions[currentQuestionIndex].key}-option-${key}`}
                  name={questions[currentQuestionIndex].key}
                  value={key}
                  type='radio'
                  className='mr-2'
                  onChange={handleChange}
                  checked={answers[questions[currentQuestionIndex].key] === key}
                />
                <label htmlFor={`${questions[currentQuestionIndex].key}-option-${key}`} className='text-sm'>
                  {option}
                </label>
              </span>
            ))}
          </div>
        </section>

        <div className='bottom-0 flex flex-wrap items-end justify-between w-full mt-4'>
        <button
            type='button'
            className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 disabled:opacity-50'
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          {currentQuestionIndex < questions.length - 1 && (
            <button
              type='button'
              className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700'
              onClick={nextQuestion}
            >
              Next
            </button>
          )}  
          {currentQuestionIndex == questions.length - 1 && (
            <button
              type='submit'
              className='px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700'
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Quiz;