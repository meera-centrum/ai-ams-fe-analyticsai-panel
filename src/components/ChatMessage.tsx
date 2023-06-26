import React from 'react'
import { ChatMessageType } from './ChatMessageType'
import './chat-message.css'

interface ChatMessageProps { 
    message: ChatMessageType
}

export const ChatMessage: React.FC<ChatMessageProps> = ({message}) => { 
    return <div className='chat-message-container'><span>{message.text}</span></div>
}
