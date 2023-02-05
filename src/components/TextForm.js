import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  const handleOnClick = ()=>{
    console.log('Convert to Upper Case');
    const t = text.toUpperCase();
    setText(t);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Convert to Upper Case
        </button>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = {
  heading: "Enter the Text",
};
