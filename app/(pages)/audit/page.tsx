'use client'
import Back from "@/assest/icon/back";
import Link from "next/link";
import React from "react";
import {pagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {Content} from "@/common/content/content";
import s from './page.module.scss'


export default function Audit() {
    return <section className={s.main}>
        <div className={s.container}>
            <div className={s.titleContainer}>
                <React.Fragment>
                    <Heading {...pagesData[0]}/>
                </React.Fragment>
                <Link href={'/#services'} className={s.link}>
                    <Back className={s.button}/><span>Back to Services</span>
                </Link>
            </div>
            <div className={s.options}>
                <ul style={{scrollBehavior:'smooth'}}>
                    {pagesData[0].options.map((o, i) => (
                        <React.Fragment key={i}>
                            <Content {...o} />
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    </section>
}