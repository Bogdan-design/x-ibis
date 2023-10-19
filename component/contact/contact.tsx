'use client'
import React from 'react';
import s from './contact.module.scss'
import {SubmitBtm} from "@/component/contact/submitBtm";
import Call from '@/assest/icon/call'
import Location from '@/assest/icon/location'
import Sms from '@/assest/icon/sms'

export const Contact = () => {
    return (
        <section className={s.contact}>
            <div className={s.container}>
                <div className={s.text}>
                    <h2 className={s.title}>
                        Get in touch
                    </h2>
                    <p className={s.deskription}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Get in touch to learn more about our IT infrastructure services
                        and how we can help you achieve your business goal.
                    </p>
                    <div className={s.ourContact}>
                        <p>
                            <Sms/><span>info@x-ibis.com</span>
                        </p>
                        <p>
                            <Call/><span>+48 694 670 955</span>
                        </p>
                        <p>
                            <Location/><span>Warsaw, Poland</span>
                        </p>
                    </div>
                </div>
                <div className={s.formContainer}>
                    <form className={s.form} action={async (formData) => {
                        // await sendEmail(formData)
                    }}>
                        <input name='senderNname'
                               type='text'
                               maxLength={500}
                               placeholder='name'
                               required/>
                        <input name='senderEmail'
                               type='email'
                               maxLength={500}
                               placeholder='email'
                               required/>
                        <input name='phoneNumber'
                               type='phone'
                               maxLength={15}
                               placeholder='Phone number'
                        />
                        <textarea name='message'
                                  placeholder='Your message'
                                  maxLength={5000}
                                  required/>
                        <SubmitBtm/>
                    </form>
                </div>
            </div>
        </section>
    );
};

