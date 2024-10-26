'use client'

import { useState } from 'react'
import { Smile, Meh, Frown } from 'lucide-react'

export default function Form4() {
  const [mood, setMood] = useState(null)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ mood, comment })
    // Handle form submission here
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="bg-white p-5 rounded-3 shadow-lg">
              <h2 className="text-center mb-4">How was your experience?</h2>
              
              <div className="d-flex justify-content-center mb-4">
                {[
                  { icon: Smile, value: 'happy', color: 'text-success' },
                  { icon: Meh, value: 'neutral', color: 'text-warning' },
                  { icon: Frown, value: 'sad', color: 'text-danger' },
                ].map(({ icon: Icon, value, color }) => (
                  <button
                    key={value}
                    type="button"
                    className={`btn btn-lg mx-2 ${mood === value ? 'border border-primary' : ''}`}
                    onClick={() => setMood(value)}
                  >
                    <Icon className={`${color}`} size={32} />
                  </button>
                ))}
              </div>

              <div className="mb-3">
                <label htmlFor="comment" className="form-label">Any additional comments?</label>
                <textarea
                  id="comment"
                  className="form-control"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}