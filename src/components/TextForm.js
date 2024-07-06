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
        <h1 className='my-4'>{props.heading}</h1>
        <div class="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'black'}} id="my Box" rows='8'></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={CopyText}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-dark mx-1 my-1" onClick={clearText}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}
    >
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
      <h2 my-3>Preview</h2>
      <p>{text.length>0?text:"Enter to preview"}</p>
    </div>
    </>
  )
}
