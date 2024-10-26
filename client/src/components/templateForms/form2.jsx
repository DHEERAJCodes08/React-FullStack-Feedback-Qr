import React, { useState } from 'react';

export default function Form2() {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const [feedback, setFeedback] = useState('');
  const [satisfaction, setSatisfaction] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const moodEmojis = ['😊', '😐', '😢', '😡', '🤔'];

  return (
    <div className="feedback-container">
      <h1>Tell Us How We're Doing!</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">What's your name?</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>How are you feeling today?</label>
            <div className="mood-selector">
              {moodEmojis.map((emoji, index) => (
                <button
                  key={index}
                  type="button"
                  className={`mood-button ${mood === emoji ? 'selected' : ''}`}
                  onClick={() => setMood(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="feedback">What's on your mind?</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="satisfaction">
              Satisfaction Level: {satisfaction}
            </label>
            <input
              type="range"
              id="satisfaction"
              min="1"
              max="10"
              value={satisfaction}
              onChange={(e) => setSatisfaction(parseInt(e.target.value))}
            />
          </div>

          <button type="submit" className="submit-button">
            Send Feedback
          </button>
        </form>
      ) : (
        <div className="thank-you">
          <h2>Thank you, {name}!</h2>
          <p>We appreciate your {mood} feedback.</p>
          <p>Your satisfaction level: {satisfaction}/10</p>
          <p>Your thoughts: "{feedback}"</p>
        </div>
      )}

      <style jsx>{`
        .feedback-container {
          font-family: 'Arial', sans-serif;
          max-width: 500px;
          margin: 2rem auto;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 2rem;
        }

        .input-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #555;
          font-weight: bold;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        input[type="text"]:focus,
        textarea:focus {
          border-color: #007bff;
          outline: none;
        }

        textarea {
          height: 100px;
          resize: vertical;
        }

        .mood-selector {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
        }

        .mood-button {
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .mood-button:hover {
          transform: scale(1.2);
        }

        .mood-button.selected {
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius: 50%;
        }

        input[type="range"] {
          width: 100%;
          margin-top: 0.5rem;
        }

        .submit-button {
          display: block;
          width: 100%;
          padding: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #0056b3;
        }

        .thank-you {
          text-align: center;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}