import React, { Fragment, useState, useEffect } from "react";
import "./TemplateSelection.css";
import TemplateCard from "./TemplateCard";
import { useNavigate } from "react-router-dom";

const TemplateSelection = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  const [selectedTemplates, setSelectedTemplates] = useState(null);

  const handleTryNowClick = (id) => {
    navigate(`/templates/dashboard/${id}`);
    console.log(id);
    setSelectedTemplates(id);
  };

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/templates");

        // Check if response is ok
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const jsonData = await res.json();
        console.log("Fetched templates:", jsonData);

        setTemplates(jsonData);
      } catch (err) {
        console.error("Error fetching templates:", err);
      }
    };
    fetchTemplates();
  }, []);

  return (
    <Fragment>
      <div className="template_cont">
        {templates.length > 0 ? (
          templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelectTemplate={handleTryNowClick}
            />
          ))
        ) : (
          <p>Loading templates...</p>
        )}
      </div>
    </Fragment>
  );
};

export default TemplateSelection;
