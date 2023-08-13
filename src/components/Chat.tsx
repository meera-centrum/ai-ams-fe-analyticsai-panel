import React, { useCallback, useState } from 'react';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';

import './chat.css';

interface ChatProps {
  placeholder?: string;
  messageItem: any;
}

export const Chat: React.FC<ChatProps> = ({ placeholder, messageItem }) => {
  /** States */
  const [messages, setMessages] = useState(messageItem);

  /** Callbacks */
  const onSendMessage = useCallback((text: string) => {
    setMessages((prev: any) => [...prev, { text }]);
  }, []);

  /** Renderer */
  return (
    <div className="chat-container">
      <ChatMessages className="chat-message-list" messages={messages} />
      <ChatInput placeholder={placeholder} onSend={onSendMessage} />
    </div>
  );
};
