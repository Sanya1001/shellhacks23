import React from "react";
import "./style.css";

export const MainUi = () => {
  return (
    <div className="main-UI">
      <div className="div">
        <p className="chatgpt-jan">
          <a
            href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper">ChatGPT Jan 9 Version</span>
          </a>
          <span className="span">
            . Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your
            feedback will help us improve.
            <br />
          </span>
        </p>
        <div className="left-sidebar">
          <div className="logout">
            <div className="text-wrapper-2">Log out</div>
            <img className="img" alt="Logout" src="/img/logout.png" />
          </div>
          <div className="updates-FAQ">
            <div className="updates-FAQ-2">Updates &amp; FAQ</div>
            <img className="img" alt="Enlarge" src="/img/enlarge.png" />
          </div>
          <div className="discord">
            <div className="text-wrapper-3">OpenAI Discord</div>
            <img className="discord-2" alt="Discord" src="/img/discord.svg" />
          </div>
          <div className="light-mode">
            <div className="text-wrapper-4">Light mode</div>
            <img className="contrast" alt="Contrast" src="/img/contrast.png" />
          </div>
          <div className="clear-conversations">
            <div className="text-wrapper-5">Clear conversations</div>
            <img className="delete" alt="Delete" src="/img/delete-1.png" />
          </div>
          <img className="line" alt="Line" src="/img/line.svg" />
          <div className="chatbot-definition">
            <div className="overlap-group">
              <div className="text-wrapper-6">Chatbot definition expl</div>
              <img className="message" alt="Message" src="/img/message.png" />
              <img className="pen" alt="Pen" src="/img/pen.png" />
              <img className="delete-2" alt="Delete" src="/img/delete.png" />
            </div>
          </div>
          <div className="new-chat-button">
            <div className="overlap">
              <div className="text-wrapper-7">New chat</div>
              <img className="plus" alt="Plus" src="/img/plus.png" />
              <div className="rectangle" />
            </div>
          </div>
        </div>
        <div className="question-user">
          <img className="avatar-user" alt="Avatar user" src="/img/avatar-user.svg" />
          <div className="text-wrapper-8">What is a Chatbot?</div>
        </div>
        <div className="answer-chatbot">
          <img className="rating" alt="Rating" src="/img/rating.png" />
          <p className="p">
            A chatbot is a computer program that simulates human conversation through voice commands or text chats or
            both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc.
            and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.
          </p>
          <img className="avatar-chatgpt" alt="Avatar chatgpt" src="/img/avatar-chatgpt.svg" />
        </div>
        <div className="regenerate-button">
          <div className="overlap-2">
            <div className="text-wrapper-9">Regenerate response</div>
            <div className="rectangle-2" />
            <img className="refresh" alt="Refresh" src="/img/refresh.png" />
          </div>
        </div>
        <div className="input-field">
          <img className="send" alt="Send" src="/img/send.svg" />
        </div>
      </div>
    </div>
  );
};
