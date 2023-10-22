import Logo from "@/assest/icon/logo";
import {links} from "@/lid/data";
import Link from "next/link";
import Arrow from "@/assest/icon/arrow";
import linkedin from "@/assest/icon/linkedin.png";
import React from "react";
import Image from "next/image";
import s from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={s.footer}>
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
                    <Link href={'https://www.linkedin.com/company/x-ibis'}>
                        {/*<Linkedin/>*/}
                        <Image src={linkedin} alt={''}/>
                    </Link>
                    <Link href={'/#home'} className={s.button}>
                        <Arrow/>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

