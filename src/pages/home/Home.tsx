import "./Home.css";
import IconStar from "../../images/icon-star.svg";
import React, { useState } from "react";

interface HomeProps {
  showThankYou: () => void;
  handleSetScore: (numb: number) => void;
  score: number | undefined;
}

export default function Home({
  showThankYou,
  handleSetScore,
  score,
}: HomeProps) {
  return (
    <>
      <div id="iconStarContainer">
        <img src={IconStar} />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratingButtons">
        <button
          style={{
            backgroundColor:
              score == 1 ? "hsl(217, 12%, 63%)" : "hsl(213, 19%, 18%)",
            color: score == 1 ? "white" : "hsl(217, 12%, 63%)",
          }}
          className="valueButton"
          onClick={() => handleSetScore(1)}
        >
          1
        </button>
        <button
          style={{
            backgroundColor:
              score == 2 ? "hsl(217, 12%, 63%)" : "hsl(213, 19%, 18%)",
            color: score == 2 ? "white" : "hsl(217, 12%, 63%)",
          }}
          className="valueButton"
          onClick={() => handleSetScore(2)}
        >
          2
        </button>
        <button
          style={{
            backgroundColor:
              score == 3 ? "hsl(217, 12%, 63%)" : "hsl(213, 19%, 18%)",
            color: score == 3 ? "white" : "hsl(217, 12%, 63%)",
          }}
          className="valueButton"
          onClick={() => handleSetScore(3)}
        >
          3
        </button>
        <button
          style={{
            backgroundColor:
              score == 4 ? "hsl(217, 12%, 63%)" : "hsl(213, 19%, 18%)",
            color: score == 4 ? "white" : "hsl(217, 12%, 63%)",
          }}
          className="valueButton"
          onClick={() => handleSetScore(4)}
        >
          4
        </button>
        <button
          style={{
            backgroundColor:
              score == 5 ? "hsl(217, 12%, 63%)" : "hsl(213, 19%, 18%)",
            color: score == 5 ? "white" : "hsl(217, 12%, 63%)",
          }}
          className="valueButton"
          onClick={() => handleSetScore(5)}
        >
          5
        </button>
      </div>
      <button className="submitButton" onClick={showThankYou}>
        SUBMIT
      </button>
    </>
  );
}
