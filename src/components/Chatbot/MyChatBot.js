import React, { useState, useRef, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import { createChatBotMessage } from "react-chatbot-kit";
import "./MyChatBot.css"; 
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
// import "react-chatbot-kit/build/main.css";
import imgbot from "../img/logo.png"
const config = {
  botName: "VisitMeBot",
  initialMessages: [
    createChatBotMessage("Hi there! How can I assist you today? 😊"),
  ],
  customComponents: {
  botAvatar: () => (
    <div className="react-chatbot-kit-chat-bot-avatar-container">
      <img src={imgbot} alt="Bot Avatar" />
    </div>),
      }
};

const MyChatBot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };
  return (
    <div>
      {/* Floating button to toggle the chatbot */}
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        {isChatbotVisible ? (
          <i className="fas fa-times"></i> 
        ) : (
          <i className="fas fa-comment"></i> 
        )}
      </button>

      {/* Chatbot container */}
      <div  className={`my-chatbot-container ${isChatbotVisible ? "show" : ""}`}>
        {/* Chatbot Header */}
        <div className="chatbot-header">
          <img
            src={imgbot}
            alt="Bot Avatar"
            className="chatbot-avatar"
          />
          <div className="chatbot-header-info">
            <h4>VisitMeBot</h4>
            <p>We are online!</p>
          </div>
        </div>

        {/* Chatbot Body */}
        <div className="chatbot-body" >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />

        </div>


           
      </div>
    </div>
  );
};

export default MyChatBot;
