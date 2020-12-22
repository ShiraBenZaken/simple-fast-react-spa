import React, { Component ,StyleSheet} from "react";
 
const Button = ({ label, handleClick }) => {
//const handleClick = () => console.log('Clicked!');

//const styles = StyleSheet.create({});

    return (
      <button className="buttons" type="button" onClick={handleClick} >
        {label}
      </button>
    );
};
export default Button;
