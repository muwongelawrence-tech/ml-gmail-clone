import React from 'react';
import SidebarOption from './sidebaroption';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button,IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {openSendMessage} from '../features/counter/mailSlice';
import './sidebar.css';

const SideBar = () => {
  const dispatch = useDispatch();
    return ( 
        <div className = "sidebar">
         <Button className = "sidebar__compose"

         onClick = {() => dispatch(openSendMessage())}

         startIcon = {<AddIcon fontSize = "large" />}>Compose</Button>

         <SidebarOption
         Icon = {InboxIcon} 
         title = "Inbox"
         number = {54}
         selected = {true}
         />

        <SidebarOption
         Icon = {StarIcon} 
         title = "starred"
         number = {34}
         selected = {false}
         />

       <SidebarOption
         Icon = {AccessTimeIcon} 
         title = "Snoozed"
         number = {34}
         selected = {false}
         />

       <SidebarOption
         Icon = {LabelImportantIcon} 
         title = "Important"
         number = {34}
         selected = {false}
         />

       <SidebarOption
         Icon = {NearMeIcon} 
         title = "Sent"
         number = {34}
         selected = {false}
         />

       <SidebarOption
         Icon = {NoteIcon} 
         title = "Drafts"
         number = {34}
         selected = {false}
         />

       <SidebarOption
         Icon = {ExpandMoreIcon} 
         title = "More"
         number = {34}
         selected = {false}
         />

         <div className = "sidebar__footer">
           <div className = "sidebar__footerIcons">
            <IconButton>
                <PersonIcon/>
            </IconButton>

            <IconButton>
                <DuoIcon/>
            </IconButton>

            <IconButton>
                <PhoneIcon/>
            </IconButton>
           </div>
         </div>

    </div>
     );
}
 
export default SideBar;