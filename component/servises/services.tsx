import React from 'react';
import {whatWeDoData} from "@/lid/data";
import {Card} from "@/component/servises/card/card";
import {Clients} from "@/component/clients/clients";
import s from './services.module.scss'

export const Services = () => {
    return (
        <section id={'services'} className={s.services}>
            <Clients/>
            <div className={s.container}>
                <div className={s.description}>
                    <h2 className={s.title}>What we do</h2>
                    <div className={s.cards}>
                        {whatWeDoData.map((s, i) => (
                            <React.Fragment key={i}>
                                <Card {...s}/>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

