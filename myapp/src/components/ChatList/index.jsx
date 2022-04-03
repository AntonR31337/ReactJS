import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {Avatar} from '@mui/material/';

export default function ChatList({data}) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map((chat) => {
                return (
                    <ListItem key={chat.id} alignItems="flex-start" sx={{borderTop: "solid 1px"}}>
                        <ListItemAvatar>
                            <Avatar alt={chat.name} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText primary={chat.name} />
                    </ListItem>
                )
            })}
        </List>
    )
}

{/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  </ListItemAvatar>
  <ListItemText primary="Brunch this weekend?" />
</ListItem>
</List> */}