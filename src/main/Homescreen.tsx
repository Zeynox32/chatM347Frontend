import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Chat from '../chat/Chat.tsx';

const drawerWidth = 240;

export default function Homescreen() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
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
