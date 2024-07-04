import React, { useState } from 'react';


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = ()=>{
    console.log("Lowercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }

  const clearText = ()=>{
    console.log("Lowercase was clicked");
    let newText='';
    setText(newText);
  }

  const CopyText = ()=>{
    let text = document.getElementById("my Box");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div class="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="my Box" rows='8'></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-secondary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-danger mx-1" onClick={CopyText}>Copy Text</button>
        <button className="btn btn-dark mx-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}
    >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read </p>
      <h2 my-3>Preview</h2>
      <p>{text.length>0?text:"enter something here for preview"}</p>
    </div>
    </>
  )
}
