import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Chat from '../chat/Chat.tsx';
import Sidebar from "../sidebar/Sidebar.tsx";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

export default function Homescreen() {
    const [currentChatId, setCurrentChatId] = React.useState(1);

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar sx={{display: "flex" , justifyContent: "space-between" }}>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>
                    <Box>
                        <ListItemButton>
                            <AccountCircleIcon fontSize={"large"}/>
                        </ListItemButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                }}
            >
                <Sidebar
                    setCurrentChatId={setCurrentChatId}
                    currentChatId={currentChatId}
                    chats={[
                        {
                            id: 0,
                            name: "Chat Room 1",
                            createdAt: new Date("2024-06-01T09:00:00Z"),
                        },
                        {
                            id: 1,
                            name: "Chat Room 2",
                            createdAt: new Date("2024-06-01T09:00:00Z"),
                        },
                        {
                            id: 2,
                            name: "Chat Room 3",
                            createdAt: new Date("2024-06-01T09:00:00Z"),
                        },
                    ]}
                />
            </Drawer>
            <Chat {...{
                "meta": {
                    "id": 0,
                    "name": "Chat Room 1",
                    "createdAt": new Date("2024-06-01T09:00:00Z")
                },
                "members": [
                    {
                        "id": 0,
                        "name": "hans"
                    },
                    {
                        "id": 1,
                        "name": "maria"
                    },
                    {
                        "id": 2,
                        "name": "peter"
                    }
                ],
                "messages": [
                    {
                        "id": 0,
                        "text": "Hello, how are you?",
                        "senderId": "0",
                        "timestamp": new Date("2024-06-01T10:00:00Z")
                    },
                    {
                        "id": 1,
                        "text": "I'm good, thanks! How about you?",
                        "senderId": "1",
                        "timestamp": new Date("2024-06-01T10:01:00Z")
                    },
                    {
                        "id": 2,
                        "text": "Doing well, just working on a project.",
                        "senderId": "0",
                        "timestamp": new Date("2024-06-01T10:02:00Z")
                    },
                    {
                        "id": 3,
                        "text": "That's great! Let me know if you need any help.",
                        "senderId": "1",
                        "timestamp": new Date("2024-06-01T10:03:00Z")
                    },
                    {
                        "id": 3,
                        "text": "Peter",
                        "senderId": "2",
                        "timestamp": new Date("2024-06-01T10:03:00Z")
                    }
                ]
            }}/>
        </Box>
    );
}
