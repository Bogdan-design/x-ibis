import React from 'react';
import galaInvest from '@/assest/icon/gala-invest.png'
import nodral from '@/assest/icon/nodral.png'
import times from '@/assest/icon/tines.png'
import Image from "next/image";
import s from './clients.module.scss'


export const Clients = () => {
    return (
        <section className={s.clients}>
            <div className={s.description}>
                <p className={s.quantity}>100+</p>
                <p className={s.text}>have been serviced
                    by our company</p>
            </div>
            <Image src={galaInvest} style={{backgroundColor:'none'}} alt={'gala-invest'} width={'163'} height={'60'}/>
            <Image src={times} alt={'times'} width={'126'} height={'36'}/>
            <Image src={nodral} width={'192'} height={'36'} alt={'nodral'}/>
        </section>
    );
};
