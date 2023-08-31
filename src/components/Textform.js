import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!" , "success")
    //setText("You have clicked on handleupClick")
  };
  //Here we are taking one event(e) and whenever we will change value in textarea handleonChange will trigger and will append in the textarea, without this it will not allow us to change the textarea.
  const handleonChange = (e) => {
    setText(e.target.value);
  };
  const handledownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!" , "success")
  };
  const handleCopy = () => {
   // The navigator.clipboard.writeText(text) function call uses the Clipboard API to copy the provided text to the user's clipboard. The writeText method is a part of the Clipboard API,
    navigator.clipboard.writeText(text);
    props.showAlert("Copied!" , "success")
  };
  const RemoveExtraSpace = () => {
   let newtext = text.split(/[ ]+/); // this split will convert string into array and if there are  extra spaces are there then it will remove it
   setText(newtext.join(" ")); // this will join that array into a string
   props.showAlert("Remove ExtraSpaces" , "success")
  };
  const handleclearText=()=>
  {
    setText('');
    props.showAlert("Cleared! " , "success")
  }
  // all the state will define here
  // here it is written that there is state name text which is having the default value : Enter the text here and we will update this value using the setText variable name.
  const [text, setText] = useState("");
  //here the text having value of 'Enter the text here' if we want to change the value then we have to use
  //setText("new text"); RIGHT WAY
  //text="newtext"; WRONG WAY;
  //setText("Hello");if do normally react will ignore that we have to use funnction for changing the value.
  return (
    <>
      <div className="container mb-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
        {/*here first one is prop and second one is state*/}
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label">
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="myBox"
          rows="9"
          style={{backgroundColor : props.mode==='light'?'white':'#13466e',color : props.mode==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button disabled={text.length===0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleUpClick}
      >
        Convert To UPPERCASE
      </button>
      <button disabled={text.length===0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handledownClick}
      >
        Convert To LOWERCASE
      </button>
      <button disabled={text.length===0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleCopy}
      >
        Copy Text
      </button>
      <button disabled={text.length===0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={RemoveExtraSpace}
      >
        Remove ExtraSpace
      </button>
      <button disabled={text.length===0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleclearText}
      >
       Clear Text
      </button>
      <div className="container"  style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        {/*text.split(" ").length this will make a array of words and we are just taking the length of that array*/}
        <p>
          <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b>Minutes to read this
        </p>
        <h2>Preview</h2>
         <div className="container"  style={{color : props.mode==='dark'?'white':'black', color : props.mode==='dark'?'white':'black'}}>
         <i>{text.length>0?text:"Nothing to preview"}</i>
         </div>
          
        
      </div>
    </>
  );
}
