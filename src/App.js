import React,{useEffect} from 'react';
import './App.css';
import Header from './common/header';
import SideBar from './common/sideBar';
import  {BrowserRouter ,Switch,Route, Link} from 'react-router-dom';
import Mail from './common/mail';
import EmailList from './common/emaillist';
import SendMail from './common/sendMail'
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOPen} from "./features/counter/mailSlice";
import { login, selectUser } from './features/counter/userSlice';
import Login from './common/login';
import { auth } from './common/firebase';


function App() {
     const sendMessageIsOpen = useSelector(selectSendMessageIsOPen);
     const user = useSelector(selectUser);
     const dispatch = useDispatch();

     useEffect(() => {
      auth.onAuthStateChanged(user => {
     if(user){
       //the user is logged in
       dispatch(login({
        displayName : user.displayName,
        email : user.email,
        photoUrl : user.photoURL
       }))
       }
      })
     },[])

  return (
    
    < BrowserRouter>
      {
      !user ? (
        <Login/>
      ) :
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
   }
    </ BrowserRouter>
  
  );
}

export default App;
