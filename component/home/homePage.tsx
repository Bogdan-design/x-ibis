import React from 'react';
import s from './homePage.module.scss'
import {Button} from "@/component/ui/button";

export const HomePage = () => {
    return (
        <section id='Home' className={s.homePage}>
            <div className={s.description}>
                <h1 className={s.title}>We will make your IT infrastructure reliable, modern and secure.</h1>
                <Button>Get in Touch</Button>
            </div>
        </section>
    );
};

