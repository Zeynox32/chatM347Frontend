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
import type {ChatProps} from "../assets/Props.tsx";
import {get, post} from "../api/api.ts";
import AddChat from "../addChat/AddChat.tsx";

const drawerWidth = 240;

export default function Homescreen() {
    const [addChat, setAddChat] = React.useState(false);
    const [currentChatId, setCurrentChatId] = React.useState(1);
    const [currentChat, setCurrentChat] = React.useState<ChatProps>();
    const [user, setUser] = React.useState({id: 0, name: ""});

    async function fetchUser(){
        const fetchUser = await get("http://localhost:8080/user", true);
        setUser({id: fetchUser.id, name: fetchUser.username});
        console.log(user)
    }

    async function sendMessage(message:string){
        setCurrentChat( await post(`http://localhost:8080/chat/sendMessage`, {"chatId": currentChat.chatId, "text": message}, true));
    }

    async function changeChat(chatId:number){
        setCurrentChat(await get(`http://localhost:8080/chat?chat-id=${chatId}`, true));
    }

    React.useEffect(() => {
        fetchUser();
    }, []);


    return (
        <Box sx={{display: 'flex', height: "100%"}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, height: "7vh"}}>
                <Toolbar sx={{display: "flex" , justifyContent: "space-between" }}>
                    <Typography variant="h6" noWrap component="div">
                        Chat M347
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
                    changeChat={changeChat}
                    setAddChat={setAddChat}
                />
            </Drawer>
            {addChat && (
                <AddChat
                    currentUser={user}
                    open={addChat}
                    setOpen={setAddChat}
                />
            )}
            {
                currentChat != null ? (
                    <Box
                        sx={{
                            flexGrow: 1,
                            p: 0,
                            mt: "6vh",
                            height: "94vh",
                            width: "100%",
                            justifyContent: "flex-end",
                            overflow: "hidden",
                        }}
                    >
                        <Chat chat={{ ...currentChat }} sendMessage={sendMessage} />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh",
                            width: "100%",
                        }}
                    >
                        <h3>Please select or add a chat</h3>
                    </Box>
                )
            }

        </Box>
    );
}
