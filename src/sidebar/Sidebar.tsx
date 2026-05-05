import Box from '@mui/material/Box';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type Sidebar = {
    chats: ChatMetadata[];
    currentChatId: number;
    setCurrentChatId: React.Dispatch<React.SetStateAction<number>>;
};

type ChatMetadata = {
    id: number;
    name: string;
    createdAt: Date;
}


function Sidebar(sidebar: Sidebar) {

    return (
        <Box>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {sidebar.chats.map((metadata, index) => (
                        <ListItem key={metadata.id} disablePadding>
                            <ListItemButton selected={sidebar.currentChatId === metadata.id}
                                            onClick={() => sidebar.setCurrentChatId(metadata.id)}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={metadata.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}

export default Sidebar;