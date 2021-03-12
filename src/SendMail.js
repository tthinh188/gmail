import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { closeSendMessage } from "./features/mailSlice"
import { useDispatch } from 'react-redux'
import { db } from './firebase'
import firebase from 'firebase'

function SendMail() {
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (formData) => {
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage());
    };

    return (
        <div className='sendMail'>
            <div className="sendMail_header">
                <h3>New Messsage</h3>
                <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMail_close"/>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="email" ref={register({ required:true })}/>
                {errors.to && <p className="sendMail_error">To is required!</p>}
                <input name="subject" placeholder="Subject" type="text" ref={register({ required:true })}/>
                {errors.subject && <p className="sendMail_error">Subject is required!</p>}
                <input name="message" className="sendMail_message" placeholder="Message" type="text" ref={register({ required:true })}/>
                {errors.message && <p className="sendMail_error">Message is required!</p>}
                <div className="sendMail_options">
                    <Button 
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="sendMail_send">Send</Button>
                </div>
            </form>

        </div>
    )
}


export default SendMail
