import React from 'react';
import Cisco from "@/assest/icon/cisco";
import aws from '@/assest/icon/aws.png'
import Image from "next/image";
import s from './certification.module.scss'
import {Typography} from "@/component/ui/typography/typography";

export const Certification = () => {
    return (
        <section className={s.certification}>
            <div className={s.container}>
                <div className={s.text}>
                    <Typography>
                        All of our employees are certified professionals.
                    </Typography>
                    <Typography variant={'text'}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Our team boasts deep expertise in navigating today's complex information environment. We understand that a solid infrastructure is the foundation of business success.
                    </Typography>
                </div>
                <div className={s.images}>
                    <Cisco/>
                    <Image src={aws} alt={'aws'}/>
                </div>
            </div>
        </section>
    );
};

