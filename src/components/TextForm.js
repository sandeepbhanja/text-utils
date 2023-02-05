import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btntext,setBtnText] = useState("Enable Light Mode");


  const handleUpClick = ()=>{
    console.log('Convert to Upper Case');
    const t = text.toUpperCase();
    setText(t);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleLowClick = ()=>{
    const t = text.toLowerCase();
    setText(t);
  }

  const toggleMode = ()=>{
    if(myStyle.color === 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode");
    }
    else{
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: "1px white solid"
      })
      setBtnText("Enable Light Mode");
    }
  }

  return (
    <>
      <div className="container" style={myStyle}>
        <div className="container mb-3">
          <h1>{props.heading}</h1>
          <button className="btn btn-primary" onClick={toggleMode}>{btntext}</button>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={myStyle}
          ></textarea>
        </div>
        <div className="container my-3" >
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleLowClick}
          >
            Convert to Lower case
          </button>
        </div>
        <div className="container my-3" >
          <h1>Your Text Summary</h1>
          <p>
            <b>Words:</b>
            {text.split(" ").length}
            <br></br>
            <b>Characters:</b>
            {text.length}
            <br></br>
            <b>Time to Read:</b>
            {text.split(" ").length * 0.008} min<br></br>
          </p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = {
  heading: "Enter the Text",
};
