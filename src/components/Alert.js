import React from 'react'
const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
function Alert(props) {
  return (
    // both are true then it will execute
    //div is given with the height to prevent thw shifting of the layout while alert
    //props.alert && .... is a direct javascript that's why should be wrap in two curly braces
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  </div>}
  </div>
  )
}

export default Alert

