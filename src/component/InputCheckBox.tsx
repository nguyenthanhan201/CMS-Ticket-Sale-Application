import React from "react";
import '../assets/css/InputCheckBox.css';

function InputCheckBox(props:any):JSX.Element {
  return (
    <div className="container-input-checkbox">
      <input type="checkbox" name={props.name} id={props.id}/>
      <label className="checkmark" htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default InputCheckBox;
