import React, { useCallback, useState } from 'react';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { generateMessage } from '../api/api';

import './chat.css';

interface ChatProps {
  placeholder?: string;
  messageItem: any;
  chatId: string;
}

export const Chat: React.FC<ChatProps> = ({ placeholder, messageItem, chatId }) => {
  /** States */
  const [messages, setMessages] = useState(messageItem);

  /** Callbacks */
  const onSendMessage = useCallback(
    (text: string) => {
      setMessages((prev: any) => [...prev, { text }]);
      generateMessage(chatId, text);
    },
    [chatId]
  );

  /** Renderer */
  return (
    <div className="chat-container">
      <ChatMessages className="chat-message-list" messages={messages} />
      <ChatInput placeholder={placeholder} onSend={onSendMessage} />
    </div>
  );
};
