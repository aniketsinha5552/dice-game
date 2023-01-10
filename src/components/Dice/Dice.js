import React, { useRef, useState } from "react";
import "./Dice.css";
import { motion } from "framer-motion";

export default function Dice({ playerDetails }) {
  const [winner, setWinner] = useState(); // stores the Winners name once a score of 20 is reached
  const [turn, setTurn] = useState(true); // true= p1's turn and false= p2's turn

  const [p1Score, setP1score] = useState(0);  // store Accumulated score of Player 1
  const [p2Score, setP2score] = useState(0);  // store Accumulated score of Player 2

  const overall = useRef([0, 0]); // To keep a tally of Each game winner

  const diceNum = useRef(0); // To store the Dice Value


  // diceRoll : This function is called when the Roll Button is Clicked
  const diceRoll = () => {
    if (p1Score > p2Score && p1Score >= 20) {
      console.log("p1 wins");
      setWinner(playerDetails.p1Name);
    } else if (p2Score > p1Score && p2Score >= 20) {
      console.log("p2 wins");
      setWinner(playerDetails.p2Name);
    } else {
      diceNum.current = Math.ceil(Math.random() * 6);
      if (turn === true) {
        setP1score((prev) => prev + diceNum.current);
      } else {
        setP2score((prev) => prev + diceNum.current);
      }
      setTurn((prev) => !prev);
    }
  };

  // Sets the Overall Score and Resets the Score Values
  function Continue() {
    if (winner === playerDetails.p1Name) {
      overall.current[0] = overall.current[0] + 1;
    } else {
      overall.current[1] = overall.current[1] + 1;
    }
    setWinner();
    setP1score(0);
    setP2score(0);
    diceNum.current = 0;
  }

const refresh = () => window.location.reload(true); // To Quit the game

  return (
    <div id="dice">
      <h1>A Simple Dice Game.</h1>

      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <p id="details">
          {playerDetails.p1Name}
          <br />
          <small>{playerDetails.p1gen}</small>
        </p>
        <p> Vs </p>
        <p id="details">
          {playerDetails.p2Name}
          <br />
          <small>{playerDetails.p2gen}</small>
        </p>
      </motion.div>

      <div
        id="scores"
        style={{ display: "flex", flexDirection: "row", width: "400px" }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            x: -50,
            transition: { yoyo: Infinity, duration: 0.3 },
          }}
          id="score"
        >
          <h2>Score</h2>
          <p>
            {playerDetails.p1Name} : {p1Score}
          </p>
          <p>
            {playerDetails.p2Name} : {p2Score}
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            x: 50,
            transition: { yoyo: Infinity, duration: 0.3 },
          }}
          id="overall-score"
        >
          <h2>Overall </h2>
          <p>
            {" "}
            {playerDetails.p1Name} : {overall.current[0]}{" "}
          </p>
          <p>
            {playerDetails.p2Name} : {overall.current[1]}
          </p>
        </motion.div>
      </div>

      {winner ? (
        <>
          <motion.h1 animate={{ rotate: 360 }}>{winner} wins🎉</motion.h1>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { yoyo: Infinity, duration: 0.3 },
            }}
            onClick={Continue}
            id="continue"
          >
            Continue
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { yoyo: Infinity, duration: 0.3 },
            }}
            onClick={refresh}
            id="quit"
          >
            Quit
          </motion.button>
        </>
      ) : (
        <>
          <div id="turn">
            <h1>
              {turn
                ? `${playerDetails.p1Name}'s turn`
                : `${playerDetails.p2Name}'s turn`}
            </h1>
          </div>
          <motion.div
            whileHover={{
              rotate: 360,
              transition: { yoyo: Infinity, duration: 0.6 },
            }}
            id="dices"
          >
            {diceNum.current}
          </motion.div>
          <motion.button
            onClick={diceRoll}
            whileHover={{
              scale: 1.1,
              transition: { yoyo: Infinity, duration: 0.3 },
            }}
            whileTap={{ rotate: 360, transition: { duration: 0.2 } }}
            id="roll"
          >
            Roll
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { yoyo: Infinity, duration: 0.3 },
            }}
            onClick={refresh}
            id="quit"
          >
            Quit
          </motion.button>
        </>
      )}
    </div>
  );
}
