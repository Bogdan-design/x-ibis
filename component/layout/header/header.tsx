import React from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import s from './header.module.scss'
import Global from "@/assest/icon/global";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Logo style={{width: '90px', height: '18px'}}/>
                <div className={s.options}>
                    <nav>
                        <ul className={s.links}>
                            {links.map(l => (
                                <Link className={s.link} key={l.hash} href={l.hash}>
                                    {l.name}
                                </Link>)
                            )}
                        </ul>
                    </nav>
                    <Global/>
                </div>
            </div>
        </header>
    );
};

