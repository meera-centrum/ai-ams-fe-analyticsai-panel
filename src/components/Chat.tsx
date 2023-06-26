import React, { useCallback, useState } from 'react';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { ChatMessageType } from './ChatMessageType';
import './chat.css'

interface ChatProps {
    placeholder?: string 
}

export const Chat: React.FC<ChatProps> = ({placeholder}) => { 
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    const onSendMessage = useCallback((text: string)  => { 
        setMessages(prev => [...prev, {text}])
    }, [])

    return (<div className='chat-container'>
        <ChatMessages className='chat-message-list' messages={messages} />
        <ChatInput placeholder={placeholder} onSend={onSendMessage} />
    </div>)
}
