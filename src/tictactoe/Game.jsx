import React, { Component} from 'react';
import Board from './Board';
import './styles.css';


function winnerYay(squares){
//the win options
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    //check if win
    for (let index = 0; index < lines.length; index++) {
        const [a,b,c] = lines[index];
        if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c]){
            return squares[a];
        }
        
    }


    return null;
}

export default class Game extends Component{

    constructor(props){
        super(props);
        this.state={
            xIsNext:true,
            stepNumber:0,
            history:[
                {squares:Array(9).fill(null)}
            ]
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber:step,
            xIsNext:(step%2)===0
        })
    }
    //when click on button x or o
    handleClick(i){
        const history= this.state.history.slice(0,this.state.stepNumber+1);
        const current=history[history.length-1];
        const squares =current.squares.slice();
        const winner=winnerYay(squares);
        if(winner || squares[i]){
            return;
        }
        //check state
        squares[i]=this.state.xIsNext?'x':'o';
        this.setState({
           history:history.concat({
               squares:squares
           }) ,
           xIsNext:!this.state.xIsNext,
           stepNumber:history.length
        })
        
    }


    render(){
        const history=this.state.history;
        const current=history[this.state.stepNumber];
        const winner=winnerYay(current.squares);
        const move=history.map((stap,move)=>{
            const desc=move? 'go to #'+move:'start the game';
            return(
                //jump to option
                <li key={move}>
                    <button className="xx" onClick={()=>{this.jumpTo(move)}}>{desc}</button>
                </li>
            )
        }); 
       let status;
        if (winner ){
            status="winner is   "+winner;
        }
        else{
            status="next player is   " + (this.state.xIsNext?'x':'O');
        }


        return(
            <div>
                <div>
                  <h2>Easy game</h2> 
                </div>
                <div className="game">
                    <div className="game-board">
                        <Board onClick={(i)=>this.handleClick(i)}
                        squares={current.squares}/>
                    </div>
                    <div className="game-info">
                        <h3>{status}</h3>
                        <ul>{move}</ul>
                    </div>
                </div>
            </div>
    )}
}