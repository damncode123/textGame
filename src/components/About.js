import React, { useState} from "react";

export default function About() {
    // let mystyle={
    //     color:'white',
    //     backgroundColor:'black'
    // };
    const [mystyle , setMystyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const [buttontext,setbuttontext]=useState("Dark Mode")
    const togglestyle = ()=>
    {
        if(mystyle.color=='white')
        {
          setMystyle({
            color:'black',
            backgroundColor:'white' 
          })
          setbuttontext("Dark Mode")
        }
        else{
            setMystyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white',
                borderRadius:'8px'
              })
              setbuttontext("Light Mode")
        }
    }
  return (
    <>
      
      <div className="container" /*here we are using style which is equal to object named my style*/ style={mystyle}>
      <h3>About :</h3>
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
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner my-3">
      <button onClick={togglestyle} type="button" className="btn btn-light">{buttontext}</button>
      {/* <button onClick={togglestyle1} type="button" className="btn btn-Dark">light Mode</button> */}
     </div>
      </div>
    </>
  );
}
