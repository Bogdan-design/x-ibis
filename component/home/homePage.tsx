'use client'
import React from 'react';
import {Button} from "@/component/ui/button";
import abstraction from "@/assest/icon/abstraction.png";
import Image from "next/image";
import '@/common/local/i18n'
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {Typography} from "@/component/ui/typography/typography";
import s from './homePage.module.scss'

export const HomePage = () => {
    const {t,ready,i18n}=useTranslation()

    if (!ready) return 'loading translations...'
    return (
        <section id='home' className={s.homePage}>
                <Image style={{
                    zIndex: '-1',
                    position: "absolute",
                    maxWidth:'100vw',
                    width: '100%', height: '100%',
                    backgroundColor: 'lightgray',
                    opacity: '85%',
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} src={abstraction} alt={''}/>
            <div className={s.container}>
                <div className={s.description} >
                    <Typography as={'h1'} style={monumentExtended.style} className={s.title}>{t('Home page title')}</Typography>
                    <Button  as={'a'} variant={'link'} href={'/#contact'}>{t('Home page button')}</Button>
                </div>
            </div>
        </section>
    );
};

