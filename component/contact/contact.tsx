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
import {Typography} from "@/component/ui/typography/typography";
import {BDO_Grotesk, monumentExtended} from "@/fonts/fonts";

export const Contact = () => {

    // const theme = {
    //     color: '#333',
    //     fontFamily: BDO_Grotesk.style,
    //     fontSize: '30px',
    //     fontStyle: 'normal',
    //     fontWeight: '500',
    //     lineHeight: '165%',
    //     maxHeight: '100%',
    // } as const

    return (
        <section id={'contact'} className={s.contact}>
            <div className={s.container}>
                <div className={s.text}>
                    <Typography>
                        Get in touch
                    </Typography>
                    <Typography variant={'text'}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Get in touch to learn more about our IT infrastructure services
                        and how we can help you achieve your business goal.
                    </Typography>
                    <div className={s.ourContact}>
                        <div>
                            <Sms/><a href={'mailto:info@x-ibis.com'}>info@x-ibis.com</a>
                        </div>
                        <div>
                            <Call/><Typography variant={'text'}>+48 694 670 955</Typography>
                        </div>
                        <div>
                            <Location/><Typography variant={'text'}>Warsaw, Poland</Typography>
                        </div>
                    </div>
                </div>
                <form className={s.form} action={async (formData) => {
                    const {data, error} = await sendEmail(formData)
                    if (error) {
                        toast.error(error)
                    }
                    return toast.success('Email send successfully')
                }}
                >
                    <TextField
                        name='senderNname'
                        size='medium'
                        id='text'
                        label="Name"
                        type='text'
                        placeholder='Name'
                        variant="standard"
                        required
                        fullWidth
                    />
                    <TextField size='medium'
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
                        size='medium'
                        id='phone'
                        label='Phone'
                        type='phone'
                        placeholder='Phone'
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        name='senderMessage'
                        size='medium'
                        id='message'
                        label='Message'
                        type='Message'
                        placeholder='Message'
                        rows={4}
                        variant="standard"
                        required
                        fullWidth
                    />
                    <SubmitBtm style={BDO_Grotesk.style} className={s.submit}/>
                </form>
            </div>
        </section>
    );
};

