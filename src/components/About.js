import React, { useState} from "react";

export default function About(props) {
    // let mystyle={  
    //     color:'white',
    //     backgroundColor:'black'
    // };
    // const [mystyle , setMystyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let mystyle = {
      color: props.mode ==='dark'?'white':'dark',
      backgroundColor: props.mode==='dark'?'dark':'light'
    }
    // const [buttontext,setbuttontext]=useState("Dark Mode")
    // const togglestyle = ()=>
    // {
    //     if(mystyle.color=='white')
    //     {
    //       setMystyle({
    //         color:'black',
    //         backgroundColor:'white' 
    //       })
    //       setbuttontext("Dark Mode")
    //     }
    //     else{
    //         setMystyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white',
    //             borderRadius:'8px'
    //           })
    //           setbuttontext("Light Mode")
    //     }
    // }
  return (
    <>
      
      <div className="container" /*here we are using style which is equal to object named my style*/ style={mystyle}>
      <h3>About TextGame:</h3>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                <u>About us:</u>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>Welcome to TextGame!</strong><br /> 
                Your ultimate online text manipulation tool! Whether you're a writer, a coder, or just someone who loves playing with words, TextGame is here to make your text editing experience seamless and efficient. <br /> <br />
<div><strong>Features:</strong><br /> <br />

<strong>Text Transformation:</strong> Need to convert your text to uppercase or lowercase? We've got you covered. With a click of a button, you can easily transform your text to match your preferred case.<br></br> <br />

<strong>Copy and Clear:</strong> Tired of manually copying text? Use our handy "Copy" button to quickly copy your edited text to your clipboard. And when you're ready to start fresh, the "Clear" button removes all text, giving you a clean slate. <br /> <br />

<strong>Remove Extra Spaces:</strong> Dealing with excessive spaces in your text? Our tool helps you eliminate those pesky extra spaces, ensuring your text looks clean and polished</div>
<br />
<strong>How to Use:</strong><br />

<b>1.</b>Enter or paste your text into the text input area. <br />
<b>2.</b>Choose from various options like converting to uppercase or lowercase, removing extra spaces, and more. <br />
<b>3.</b>Click the corresponding buttons to apply the selected transformations. <br />
<b>4.</b>Use the "Copy" button to copy your edited text to your clipboard or "Clear" to start anew. <br /> <br />
<b>TextGame</b> is designed to be user-friendly and accessible, whether you're on your computer, tablet, or smartphone. We're dedicated to providing you with a straightforward yet powerful text manipulation experience. <br /> <br />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="conatiner my-3"> */}
      {/* <button onClick={togglestyle} type="button" className="btn btn-light">{buttontext}</button> */}
      {/* <button onClick={togglestyle1} type="button" className="btn btn-Dark">light Mode</button> */}
     {/* </div> */}
      </div>
    </>
  );
}
