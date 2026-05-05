import Box from "@mui/material/Box";
import * as React from 'react';

type MessageProps = {
    text: string;
    senderName: string;
    timestamp: Date;
};

export default function Message({ text, senderName, timestamp }: MessageProps) {
    console.log(text)
    console.log(senderName)
    console.log(timestamp)
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <h4>test</h4>
        </Box>
    );
}

