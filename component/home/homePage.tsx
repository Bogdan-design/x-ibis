import React from 'react';
import s from './homePage.module.scss'
import {Button} from "@/component/ui/button";
import abstraction from "@/assest/icon/abstraction.png";
import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
    return (
        <section id='home' className={s.homePage}>
                <Image style={{
                    zIndex: '-1',
                    position: "absolute",
                    width: '100%', height: '100%',
                    backgroundColor: 'lightgray',
                    opacity: '85%',
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} src={abstraction} alt={''}/>
            <div className={s.container}>

                <div className={s.description}>
                    <h1 className={s.title}>We will make your IT infrastructure reliable, modern and secure.</h1>
                    <Button as={'a'} href={'/#contact'}>Get in Touch</Button>
                </div>
            </div>
        </section>
    );
};

