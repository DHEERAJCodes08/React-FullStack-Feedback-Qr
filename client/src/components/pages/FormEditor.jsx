const FormEditor = ({ templateId }) => {
    const [questions, setQuestions] = useState([]);
  
    useEffect(() => {
      const fetchQuestions = async () => {
        const res = await axios.get(`/api/templates/${templateId}/questions`);
        setQuestions(res.data);
      };
  
      fetchQuestions();
    }, [templateId]);
  
    const handleSave = async () => {
      await axios.post(`/api/templates/${templateId}/questions`, { questions });
      alert('Form saved!');
    };
  
    return (
      <div>
        <h3>Edit Form for Template {templateId}</h3>
        {questions.map((question, index) => (
          <div key={index}>
            <input
              type="text"
              value={question.question_text}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[index].question_text = e.target.value;
                setQuestions(newQuestions);
              }}
            />
          </div>
        ))}
        <Button onClick={handleSave}>Save Form</Button>
      </div>
    );
  };
  


  //This is Sample Functanality for Editing Form 