import React, { Fragment } from "react";
import "./TemplateCard.css";

function TemplateCard({ template, onSelectTemplate }) {
  // Destructure props
  const { id, src, title } = template; // Extract properties from the template object

  return (
    <Fragment>
      <div className="template_card">
        <div className="card-image">
          <img
            src={src} // Use src from the template object
            alt="Beautiful landscape"
            className="card-img"
          />
          <div className="vintage-overlay"></div>
        </div>
        <div className="card-content">
          <p className="customize-text">{title}</p>
          <button className="try-now-btn" onClick={() => onSelectTemplate(id)}>
            Try Now
          </button>{" "}
          {/* Call the function on button click */}
        </div>
      </div>
    </Fragment>
  );
}

export default TemplateCard;
