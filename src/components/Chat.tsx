import React, { useCallback, useState } from 'react';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { generateMessage } from '../api/api';

import './chat.css';

interface ChatProps {
  placeholder?: string;
  messageItem: any;
  chatId: string;
  url: string;
  cookie: string;
}

export const Chat: React.FC<ChatProps> = ({ placeholder, messageItem, chatId, url, cookie }) => {
  /** States */
  const [messages, setMessages] = useState(messageItem);
  const [loading, setLoading] = useState(false);

  /** Callbacks */
  const onSendMessage = useCallback(
    (text: string) => {
      setMessages((prev: any) => [...prev, { text }]);
      setLoading(true);
      generateMessage(chatId, url, cookie, text, setLoading);
    },
    [chatId, cookie, url]
  );

  /** Renderer */
  return (
    <div className="chat-container">
      <ChatMessages className="chat-message-list" messages={messages} isLoading={loading} />
      <ChatInput placeholder={placeholder} onSend={onSendMessage} />
    </div>
  );
};
