import React, { Component } from "react";
import Button from "../components/Button";
import Post from "../screens/Post";

function Home (){
    
    const [showHidePost, setshowHidePost] = React.useState(false)

    const onClick1 = () => setshowHidePost(true)
    const onClick2 = () => setshowHidePost(false)


    return (
    <div>
        <div>
            <h2>SIMPLE SPA APP</h2>
            <p>hello all :) </p>
            <div className="container">
                <div className="btns">
                    <Button  label={'Click here to open'} handleClick={onClick1} />
                </div>
                <div className="btns">
                    <Button label={'Click here to close'} handleClick={onClick2} />
                </div>
            </div>
        </div>
        <div>
            {showHidePost ? <Post/> : null }
        </div>
    </div>

    );
}
export default Home;