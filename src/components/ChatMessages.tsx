import React from 'react';
import { ChatMessageType } from './ChatMessageType';
import { ChatMessage } from './ChatMessage';
import classNames from 'classnames';
import Loading from './Loading';
import './chat-messages.css';

interface ChatMessagesProps {
  className?: string;
  messages: ChatMessageType[];
  isLoading: boolean;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ className, messages, isLoading }) => {
  return (
    <div className={classNames('chat-messages-container', className)}>
      {messages.map((message, index) => (
        <ChatMessage key={`${index}-${message.text}`} message={message} />
      ))}
      <div className="chat-messages-loading">{isLoading ? <Loading /> : null}</div>
    </div>
  );
};
