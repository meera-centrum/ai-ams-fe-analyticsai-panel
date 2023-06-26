import React from 'react'
import { ChatMessageType } from './ChatMessageType'
import { ChatMessage } from './ChatMessage'
import classNames from "classnames";
import './chat-messages.css'

interface ChatMessagesProps { 
    className?: string
    messages: ChatMessageType[]
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({className, messages}) => { 
    return (<div className={classNames('chat-messages-container', className)}>
            {messages.map((message, index) => <ChatMessage key={`${index}-${message.text}`} message={message}/>)}
        </div>)
}
