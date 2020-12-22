import React, { Component } from "react";
import Button from "../components/Button";
import Post from "../screens/Post";

function Home (){
    //for opening the post..
    const [showHidePost, setshowHidePost] = React.useState(false)

    const onClick1 = () => setshowHidePost(!showHidePost)
    const onClick2 = () => alert("good luck")


    return (
    <div className="all">
        <div>
            <h2>SIMPLE SPA APP</h2>
            <p>hello all :) </p>
            <div className="container">
                <div className="btns">
                    <Button  label={'Click here to open and close'} handleClick={onClick1} />
                </div>

                <div className="btns">
                    <Button label={'just alert'} handleClick={onClick2} />
                </div>
            </div>
        </div>
        <div className="post">
            {showHidePost ? <Post/> : null }
        </div>
    </div>

    );
}
export default Home;