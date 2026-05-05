import Box from '@mui/material/Box';
import Message from './Message.tsx'
import * as React from 'react';


type Chat = {
    meta: ChatMetadata;
    members: Member[];
    messages: ChatMessage[];
};

type ChatMessage = {
    id: number;
    text: string;
    senderId: string;
    timestamp: Date;
};

type ChatMetadata = {
    id: number;
    name: string;
    createdAt: Date;
}

type Member = {
    id: number;
    name: string;
}

function Chat(chat: Chat) {
    console.log(chat)
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            {chat.messages.map((message) => (
                <Message
                    text={message.text}
                    senderName={chat.members.find(member => member.id === parseInt(message.senderId))?.name || "Unknown"}
                    timestamp={message.timestamp}
                />
            ))}
        </Box>
    );
}

export default Chat;