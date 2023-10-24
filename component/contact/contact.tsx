'use client'
import React from 'react';
import {SubmitBtm} from "@/component/contact/submitBtm";
import Call from '@/assest/icon/call'
import Location from '@/assest/icon/location'
import Sms from '@/assest/icon/sms'
import {TextField} from "@mui/material";
import {sendEmail} from "@/actions/sendEmail";
import s from './contact.module.scss'
import toast from "react-hot-toast";

export const Contact = () => {
    return (
        <section id={'contact'} className={s.contact}>
            <div className={s.container}>
                <div className={s.text}>
                    <h2 className={s.title}>
                        Get in touch
                    </h2>
                    <p className={s.description}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Get in touch to learn more about our IT infrastructure services
                        and how we can help you achieve your business goal.
                    </p>
                    <div className={s.ourContact}>
                        <p>
                            <Sms/><a href={'mailto:info@x-ibis.com'}>info@x-ibis.com</a>
                        </p>
                        <p>
                            <Call/><span>+48 694 670 955</span>
                        </p>
                        <p>
                            <Location/><span>Warsaw, Poland</span>
                        </p>
                    </div>
                </div>
                <form className={s.form} action={async (formData) => {
                   const {data,error} = await sendEmail(formData)
                if(error){
                    toast.error(error)
                }
                return toast.success('Email send successfully')
                }}
                >
                    <TextField sx={{maxHeight:'100%'}}
                        name='senderNname'
                        id='text'
                        label="Name"
                        type='text'
                        placeholder='Name'
                        variant="standard"
                        required
                        fullWidth
                    />
                    <TextField sx={{maxHeight:'100%'}}
                        name='senderEmail'
                        id='email'
                        label='Email'
                        type='email'
                        placeholder='Email'
                        variant="standard"
                        required
                        fullWidth
                    />
                    <TextField
                        name='senderPhone'
                        id='phone'
                        label='Phone'
                        type='phone'
                        placeholder='Phone'
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        name='senderMessage'
                        id='message'
                        label='Message'
                        type='Message'
                        placeholder='Message'
                        rows={4}
                        variant="standard"
                        required
                        fullWidth
                    />
                    <SubmitBtm/>
                </form>
            </div>
        </section>
    );
};

