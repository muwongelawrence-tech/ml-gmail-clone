import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import {closeSendMessage} from '../features/counter/mailSlice';
import {useDispatch} from 'react-redux';
import './sendMail.css';
import {db} from './firebase';
import firebase from 'firebase';

const SendMail = () => {
    const {register ,handleSubmit, formState:{errors}} = useForm();
    
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
      console.log(formData);
      db.collection('emails').add({
        to:formData.to,
        subject:formData.subject,
        message:formData.message,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })

      dispatch(closeSendMessage());
    };

    return ( 
        <div className="sendmail">
            <div className = "sendmail__header">
                <h3>New message</h3>
                <CloseIcon 
                onClick = {()=> dispatch(closeSendMessage())}
                className = "sendmail__close"/>
            </div>

            <form onSubmit = {handleSubmit(onSubmit)}>
                <input 
                name = "to" 
                placeholder = "To" 
                type = "email" 
                { ...register("to",{required : true})}
                />

               {errors.to && errors.to.type === "required" && 
               <p className= "sendmail__error">To is Required!!</p>}

                <input 
                name="subject" 
                placeholder = "Subject" 
                type = "text" 
                { ...register("subject",{required : true})}
                />

                  {errors.subject && errors.subject.type === "required" && 
               <p className= "sendmail__error">Subject is Required!!</p>}

                <input  
                name= "message" 
                placeholder = "Message...." 
                type = "text" 
                className = "sendmail__message" 
                { ...register("message",{required : true})}
                />

              {errors.message && errors.message.type === "required" && 
               <p className = "sendmail__error">Message is Required!!</p>}

                <div className = "sendmail__options">
                  <Button 
                  className = "sendmail__send"
                  variant = "contained"
                   color = "primary"
                   type = "submit"
                  >
                    Send
                  </Button>
                </div>
            </form>
        </div>
     );
}
 
export default SendMail;