import React, { useState } from 'react';

export default function Form3() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    satisfaction: '',
    improvements: '',
    recommendation: '',
    additionalComments: '',
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="progress-form">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h2>How satisfied are you with our product?</h2>
            <div className="radio-group">
              {['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'].map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="satisfaction"
                    value={option}
                    
                    checked={formData.satisfaction === option}
                    onChange={handleInputChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="form-step">
            <h2>What areas do you think we can improve?</h2>
            <textarea
              name="improvements"
              value={formData.improvements}
              onChange={handleInputChange}
              placeholder="Your suggestions for improvement"
            ></textarea>
          </div>
        )}
        {step === 3 && (
          <div className="form-step">
            <h2>How likely are you to recommend us to others?</h2>
            <input
              type="range"
              name="recommendation"
              min="0"
              max="10"
              value={formData.recommendation}
              onChange={handleInputChange}
            />
            <div className="range-labels">
              <span>Not likely</span>
              <span>Very likely</span>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="form-step">
            <h2>Any additional comments?</h2>
            <textarea
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleInputChange}
              placeholder="Your additional comments"
            ></textarea>
          </div>
        )}
        <div className="form-nav">
          {step > 1 && <button type="button" onClick={handlePrev}>Previous</button>}
          {step < totalSteps ? (
            <button type="button" onClick={handleNext}>Next</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>

      <style jsx>{`
        .progress-form {
          font-family: 'Roboto', sans-serif;
          max-width: 500px;
          margin: 2rem auto;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .progress-bar {
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 4px;
          margin-bottom: 2rem;
          overflow: hidden;
        }
        .progress {
          height: 100%;
          background-color: #4CAF50;
          transition: width 0.3s ease;
        }
        h2 {
          margin-bottom: 1rem;
          color: #333;
        }
        .form-step {
          animation: fadeIn 0.5s;
        }
        .radio-group {
          display: flex;
          flex-direction: column;
        }
        .radio-group label {
          margin-bottom: 0.5rem;
        }
        textarea, input[type="range"] {
          width: 100%;
          margin-bottom: 1rem;
        }
        textarea {
          height: 100px;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #666;
        }
        .form-nav {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #45a049;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}