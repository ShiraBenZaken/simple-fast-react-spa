import React, { Component } from "react";
import Button from "../components/Button";


function Home (){
    return (
      <div>
        <h2>SIMPLE SPA APP</h2>
        <p>hello all :) </p>
        <div className="container">
            <div className="btns">
                <Button  label={'Click Button One!'} handleClick={() => alert('Clicked 1')}/>
            </div>
            <div className="btns">
                <Button label={'Click Button Two!'} handleClick={() => alert('Clicked 2')} />
            </div>
        </div>
      </div>
    );
}
export default Home;