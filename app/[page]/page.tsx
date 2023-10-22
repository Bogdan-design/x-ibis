'use client'
import Back from "@/assest/icon/back";
import Link from "next/link";
import React from "react";
import {pagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {Content} from "@/common/content/content";
import s from './page.module.scss'
import {throws} from "assert";
import {PageError} from "@/common/errors/error404";


export default function Page({params}:{ params: { page: string } }) {

    const {page} = params

    let dataIndex

    switch (page) {
        case 'audit': dataIndex = 0;
        break;
        case 'security': dataIndex = 1;
        break;
        case 'ensuring': dataIndex = 2;
        break;
        case 'administration': dataIndex = 3;
        break;
        case 'solution': dataIndex = 4;
        break;
        default:
            return <PageError/>

    }


    return <section className={s.main}>
        <div className={s.container}>
            <div className={s.titleContainer}>
                <React.Fragment>
                    <Heading {...pagesData[dataIndex]}/>
                </React.Fragment>
                <Link href={'/#services'} className={s.link}>
                    <Back className={s.button}/><span>Back to Services</span>
                </Link>
            </div>
            <div className={s.options}>
                <ul>
                    {pagesData[dataIndex].options.map((o, i) => (
                        <React.Fragment key={i}>
                            <Content {...o} />
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    </section>
}