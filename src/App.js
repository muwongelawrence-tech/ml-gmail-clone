import React from 'react';
import './App.css';
import Header from './common/header';
import SideBar from './common/sideBar';
import  {BrowserRouter ,Switch,Route, Link} from 'react-router-dom';
import Mail from './common/mail';
import EmailList from './common/emaillist';
import SendMail from './common/sendMail'
import { useSelector } from 'react-redux';
import { selectSendMessageIsOPen} from "./features/counter/mailSlice";
import { selectUser } from './features/counter/userSlice';


function App() {
     const sendMessageIsOpen = useSelector(selectSendMessageIsOPen);
     const user = useSelector(selectUser);
  return (
    {
      !user ? (
        <Login/>
      ) :
      
    }
    < BrowserRouter>
    <div className="App">
      <Header/>
        <div className = "app__body">
           <SideBar/>

           <Switch>
             <Route path = "/mail" component ={Mail}/>
             <Route path = "/" component ={EmailList}/>
          </Switch>
        </div>
          {sendMessageIsOpen && <SendMail/>}
    </div>
    </ BrowserRouter>
  );
}

export default App;
