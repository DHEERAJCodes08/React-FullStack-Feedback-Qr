import React, { useState } from "react";
import { Star } from "lucide-react";

import "./form1.css"; // Import external CSS file

export default function Form1({ bgColor ,  currentFont ,feedbackTitle }) {
  const [rating, setRating] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  // Handle the click event for rating stars
  const handleStarClick = (index) => {
    setRating(index + 1); // Set the rating to 1-based index
  };

  // Handle the click event for emoji selection
  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji); // Set the selected emoji
  };

  return (
    <div className="feedback-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div
                className="card-body"
                style={{ backgroundColor: bgColor, fontFamily: currentFont }}
              >
                <h1 className="text-center feedback-title" style={{ fontFamily: currentFont }}>{feedbackTitle}</h1>

                <form className="feedback-form"  >
                  {/* First Name Field */}
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter your first name"
                    />
                  </div>

                  {/* Star Rating */}
                  <div className="form-group">
                    <label className="form-label">Rating</label>
                    <div className="d-flex">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`star-icon ${
                            index < rating ? "star-selected" : "star-unselected"
                          }`}
                          onClick={() => handleStarClick(index)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Feedback Options */}
                  <div className="form-group">
                    <label className="form-label">
                      What did you like the most?
                    </label>
                    <div className="row">
                      {["Speed", "Customer Service", "Price", "Quality"].map(
                        (option) => (
                          <div key={option} className="col-6 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={option}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={option}
                              >
                                {option}
                              </label>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Usage Frequency */}
                  <div className="form-group">
                    <label htmlFor="frequency" className="form-label">
                      How often do you use this product/service?
                    </label>
                    <select className="form-select" id="frequency">
                      <option value="">Select frequency</option>
                      <option value="first-time">First time</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  {/* Emoji Feedback */}
                  <div className="form-group">
                    <label className="form-label">Overall experience</label>
                    <div className="d-flex justify-content-center">
                      {[
                        { emoji: "👍", label: "Good" },
                        { emoji: "🤩", label: "Excelent" },
                        { emoji: "😣", label: "Bad" },
                      ].map(({ emoji, text }) => (
                        <button
                          key={emoji}
                          className={`btn feedback-emoji ${
                            selectedEmoji === emoji
                              ? "btn-primary"
                              : "btn-outline-secondary"
                          }`}
                          onClick={() => handleEmojiClick(emoji)}
                          type="button"
                        >
                          <span>{emoji}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    Submit Feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
