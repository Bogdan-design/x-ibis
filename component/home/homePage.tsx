import React from 'react';
import s from './homePage.module.scss'
import {Button} from "@/component/ui/button";
import abstraction from "@/assest/icon/abstraction.png";
import Image from "next/image";

export const HomePage = () => {
    return (
        <section id='Home' className={s.homePage}>
            <Image style={{
                zIndex:'-1',
                position:"absolute",
                width:'100%',height:'100%',
                backgroundColor:'lightgray',
                opacity:'85%',
                backgroundSize:'auto',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
            }} src={abstraction} alt={''}/>
            <div className={s.description}>
                <h1 className={s.title}>We will make your IT infrastructure reliable, modern and secure.</h1>
                <Button>Get in Touch</Button>
            </div>
        </section>
    );
};

