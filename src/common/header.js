import React from 'react';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
//import logo from './g.png';
import logo1 from './gmail.jpg';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/counter/userSlice';
import { auth } from './firebase';

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
        
    const signOut = () => {

        auth.signOut().then(() => {
                dispatch(logout());
            }
        );
     
    };

    return (  
        <div className = "header">
            <div className = "header-left">
                <IconButton>
                < MenuIcon/>
                </IconButton>

              <img src = {logo1} alt = "gmail-logo"/>
            </div>
          
            <div className = "header-middle">
              <SearchIcon/>
                <input placeholder = "Search mail" type = "text"/>
                <ArrowDropDownIcon className = "header__inputCaret" />
            </div>

            <div className = "header-right">
                <IconButton>
                <AppsIcon/>
                </IconButton>

                <IconButton>
                <NotificationsIcon/>
                </IconButton>

                <Avatar onClick = {signOut} src = {user?.photoUrl}/>
               
            </div>
         
        </div>
    );
}
 
export default Header;