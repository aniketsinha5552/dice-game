import React, { useRef } from 'react'
import './Home.css'

export default function Home({playerDetails,setPlayerDetails}) {

    const p1Name= useRef();
    const p2Name = useRef();

    // Gets the Value from the form and stores in the playerDetails object
    function players(){
        if(p1Name.current===undefined || p2Name.current===undefined){
            alert("Invalid Input")
        }else{
            setPlayerDetails({
                p1Name: p1Name.current,
                p2Name: p2Name.current,
                p1gen: document.getElementById('gender1').value,
                p2gen: document.getElementById('gender2').value
    
            })
            console.log(playerDetails)
        }
       
        
    }
  return (
    <div id='home'>
        <h1>Dices 🎲.</h1>
        <h3>Enter Player Details</h3>
        <form>
            <p>Player 1</p>
            <input placeholder='Name' onChange={(e)=>p1Name.current=e.target.value} ></input>
            <select id='gender1' name="Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </form>
        <form>
            <p>Player 2</p>
            <input placeholder='Name' onChange={(e)=>p2Name.current=e.target.value}></input>
            <select id='gender2' name="Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </form>
        <button type="button" onClick={players}>Submit</button>
    </div>
  )
}
