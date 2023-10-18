import React from 'react';
import {whatWeDoData} from "@/lid/data";
import {Card} from "@/component/card/card";
import s from './services.module.scss'
import {Clients} from "@/component/clients/clients";
import sprite from "@/assest/icon/sprite.svg";
import Image from "next/image";

export const Services = () => {
    return (
        <section className={s.services}>
            <Clients/>
            <div className={s.description}>
                <h2>What we do</h2>
                <div className={s.cards}>
                    {whatWeDoData.map((s, i) => (
                       <React.Fragment key={i}>
                           <Card {...s}/>
                       </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

