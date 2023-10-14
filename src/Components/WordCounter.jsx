import React, { useState } from "react";

const Paragraph = () => {
    const [text, setText] = useState("");

    const handleTextareaChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    };

    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card w-50">
                <div className="card-body">
                    <h3 className="mb-5 text-center">Responsive paragraph word counter</h3>
                    <textarea
                        className="form-control"
                        rows={7}
                        id="the-textarea"
                        value={text}
                        onChange={handleTextareaChange}
                    />
                    <p className="h6 mt-3 text-center">Word Count: {wordCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Paragraph;
