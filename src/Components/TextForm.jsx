import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  const handleSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(""));
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const setTextToEmpty = () => {
    setText("");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-4"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "#f8f9fa",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control my-4 "
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>

          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleUpClick}
            className="btn btn-primary mx-3 my-3"
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            onClick={handleLoClick}
            className="btn btn-primary mx-3 my-3"
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            onClick={setTextToEmpty}
            className="btn btn-primary mx-3 my-3"
          >
            Clear Text
          </button>
          <button
            type="button"
            onClick={handleCopy}
            disabled={text.length === 0}
            className="btn btn-primary mx-3 my-3"
          >
            Copy Text
          </button>
          <button
            type="button"
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
            className="btn btn-primary mx-3 my-3"
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            onClick={handleSpaces}
            disabled={text.length === 0}
            className="btn btn-primary mx-3 my-3"
          >
            Remove Spaces
          </button>
        </div>
        <div className="container">
          <h2>Your Text Summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
            Words and {text.length} Characters
          </p>
          <p>{0.008 * text.split(" ").length} Minute takes to reads</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0 ? text : "Enter some Text in the above text field"}
          </p>
        </div>
      </div>
    </>
  );
}
