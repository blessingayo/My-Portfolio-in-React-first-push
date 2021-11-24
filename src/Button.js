import React from "react";
import './Button.css';

const Button = ({type, first, second, onMouseOver}) => {
  return (
      <button onMouseOver={onMouseOver} className={type}><span>{first}</span>{second}</button>
      
     
  );
};

Button.defaultProps = {
  type: 'btn1',
  first: '',
  second: '',
}
export default Button;
