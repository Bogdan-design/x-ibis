import Logo from "@/assest/icon/logo";
import {links} from "@/lid/data";
import Link from "next/link";
import Linkedin from "@/assest/icon/linkedin";
import Arrow from "@/assest/icon/arrow";
import React from "react";
import s from './footer.module.scss'

export const Footer = () => {
    return (
        <header className={s.header}>
            <Logo style={{width:'90px', height:'18px'}}/>
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
                <Linkedin/>
                <Arrow/>
            </div>
        </header>
    );
};

