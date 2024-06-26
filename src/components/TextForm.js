import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("upper case was clicked "+ text); used to appear in console
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted into Uppercase","success")
  };
  const handleloclick = () => {
    // console.log("upper case was clicked "+ text); used to appear in console
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted into Lowercase","success")
  };
  const handleclearclick = () => {
    // console.log("upper case was clicked "+ text); used to appear in console
    let newText = "";
    setText(newText);
    props.showAlert(" Text has been cleared","success")

  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    // console.log("on change");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to ClipBoard","success")
  };
  const handleExtraSpaces = () => {
    // console.log("on change");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra Spaces has been Removed","success")
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'white':'rgb(65 64 64)'}}>
        <h3> {props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor : props.mode==='dark'?'grey':'white'}}
            id="myBox"
            rows="8"
           
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          RemoveSpaces
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white':'rgb(65 64 64)'}} >
        <h2> Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <p>{(1.5 * text.split(" ").length) / 60} Minutes to type</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here."}</p>
      </div>
    </>
  );
}
