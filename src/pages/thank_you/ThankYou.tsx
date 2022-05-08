import React from "react";
import ThankYouIllustration from "../../images/illustration-thank-you.svg";
import "./ThankYou.css";

export default function ThankYou({ score }: { score: number | undefined }) {
  return (
    <div id="container">
      <img src={ThankYouIllustration} />
      <div id="answerRow">
        <div id="answerBox">
          <p>You selected {score} out of 5</p>
        </div>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
