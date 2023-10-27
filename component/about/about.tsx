import React from 'react';
import {Button} from "@/component/ui/button";
import s from './about.module.scss'
import {Typography} from "@/component/ui/typography/typography";

export const About = () => {
    return (
        <section id={'about'} className={s.about}>
            <div className={s.container}>
                <Typography className={s.title}>
                    We specialize in
                    IT infrastructure and security.
                </Typography>
                <div className={s.description}>
                    <h3 className={s.titleDescription}>
                        Our mission to develop and uphold cutting-edge tech solutions, ensuring reliability, efficiency,
                        and
                        protection.
                    </h3>
                    <div className={s.text}>
                        <Typography variant={"text"}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We're a experienced IT infrastructure and security firm, driven by innovation since day one.
                        </Typography>
                        <Typography variant={'text'}>
                            We collaborate closely with our clients, crafting personalized solutions
                            that align perfectly with their goals and needs.
                        </Typography>
                        <Typography variant={'text'}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Our team boasts deep expertise in navigating today's complex information environment. We
                            understand that a solid infrastructure is the foundation of business success.
                        </Typography>
                    </div>
                    <Button as={'a'} href={'#contact'}>Get in Touch</Button>
                </div>
            </div>
        </section>
    );
};

