import React from "react";
import Typewriter from "typewriter-effect";
import "./BirthdayMessage.css";

const BirthdayMessage = () => {
  return (
    <div className="birthday-message">
      <div className="balloon-container">
        <div className="balloon balloon1"></div>
        <div className="balloon balloon2"></div>
        <div className="balloon balloon3"></div>
        <div className="balloon balloon4"></div>
        <div className="balloon balloon5"></div>
        <div className="rope"></div>
      </div>
      <Typewriter
        options={{
          strings: ["<h1><strong>Feliz Cumpleaños Milenita</strong></h1>"],
          autoStart: true,
          loop: true,
          delay: 75,
          wrapperClassName: "title-typewriter",
        }}
      />
      <Typewriter
        options={{
          strings: ["<h3>¡Que viva la cumpleañera!</h3>"],
          autoStart: true,
          loop: true,
          delay: 90,
          wrapperClassName: "description-typewriter",
        }}
      />
    </div>
  );
};

export default BirthdayMessage;

