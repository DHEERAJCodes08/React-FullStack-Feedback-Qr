import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WebFont from "webfontloader"; //the font loader
import "./EditingDashboard.css";
import Form1 from "../templateForms/form1";
import Form2 from "../templateForms/form2";
import Form3 from "../templateForms/form3";
import Form4 from "../templateForms/form4";

export default function EditingDashboard() {
  const { id } = useParams();
  const [bgColor, setBackgroundColor] = useState("#a7bae6");
  const [currentFont, setFont] = useState("");
  const [currentTitle , setTitle] = useState("Feedback Form");

  //this is to load the font selected by the user
  useEffect(() => {
    if (currentFont) {
      WebFont.load({
        google: {
          families: [currentFont],
        },
      });
    }
  }, [currentFont]);

  const handelColorChange = (e) => {
    setBackgroundColor(e.target.value);
    console.log(bgColor);
  };

  const handleFontChange = (e) => {
    const font = e.target.value;
    setFont(font);
    console.log(font);
  };

  const handelTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(currentTitle);
    
  }

  const returnForm = () => {
    switch (id) {
      case "1":
        return <Form1 bgColor={bgColor} currentFont={currentFont} feedbackTitle={currentTitle} />;
      case "2":
        return <Form2 bgColor={bgColor} currentFont={currentFont} />;
      case "3":
        return <Form3 bgColor={bgColor} currentFont={currentFont} />;
      case "4":
        return <Form4 bgColor={bgColor} currentFont={currentFont} />;
      default:
        return <div>No form found for this ID</div>;
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <div className="project-name">Feedback Form Editor</div>
        <button className="save-btn">Save Changes</button>
      </div>
      <div className="main-content">
        <div className="edit-panel">
          <div className="edit-section">
            <h3>Background Color</h3>
            <div className="color-picker-wrapper">
              <input
                type="color"
                className="color-picker-tool"
                value={bgColor}
                onChange={handelColorChange}
              />
            </div>
          </div>
          <div className="edit-section">
            <h3>Set Font</h3>
            <select
              className="font-select"
              value={currentFont}
              onChange={handleFontChange}
            >
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              <option value="Lucida Console">Lucida Console</option>
              <option value="Impact">Impact</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              <option value="Papyrus">Papyrus</option>
            </select>
          </div>
          <div className="edit-section">
            <h3>Add Image</h3>
            <div className="file-input-wrapper">
              <button className="file-input-btn">Choose Image</button>
              <input type="file" className="file-input" accept="image/*" />
            </div>
          </div>
        </div>
        <div className="preview-panel">{returnForm()}</div>

        {/* Right pannel for editing Feedback  Title and Questions and Options  */}
        <div className="edit-panel">
          <div className="edit-section">
            <h3>Set New Title</h3>
            <div className="color-picker-wrapper">
              <input type="text" className="" value={currentTitle} onChange={handelTitleChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
