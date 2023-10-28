'use client'
import React from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import {Menu} from "@/component/menu/menu";
import s from './header.module.scss'
import {useTranslation} from "next-i18next";

export const Header = () => {
    const {t}=useTranslation()
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link href={'/'}>
                    <Logo style={{width: '90px', height: '18px'}}/>
                </Link>
                <div className={s.options}>
                    <nav>
                        <ul className={s.links}>
                            {links.map(l => (
                                <Link className={s.link} key={l.hash} href={`${'/'}${l.hash}`}>{t(`${l.name}`)}
                                </Link>)
                            )}
                        </ul>
                    </nav>
                    <Menu/>
                </div>
            </div>
        </header>
    );
};

