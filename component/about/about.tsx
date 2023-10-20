import React from 'react';
import {Button} from "@/component/ui/button";
import s from './about.module.scss'

export const About = () => {
    return (
        <section id={'about'} className={s.about}>
            <div className={s.container}>
                <h2 className={s.title}>
                    We specialize in
                    IT infrastructure and security.
                </h2>
                <div className={s.description}>
                    <h3 className={s.titleDescription}>
                        Our mission to develop and uphold cutting-edge tech solutions, ensuring reliability, efficiency,
                        and
                        protection.
                    </h3>
                    <div>
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We're a experienced IT infrastructure and security firm, driven by innovation since day one.
                        </p>
                        <p>
                            We collaborate closely with our clients, crafting personalized solutions
                            that align perfectly with their goals and needs.
                        </p>
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Our team boasts deep expertise in navigating today's complex information environment. We
                            understand that a solid infrastructure is the foundation of business success.
                        </p>
                    </div>
                    <Button as={'a'} href={'#contact'}>Get in Touch</Button>
                </div>
            </div>
        </section>
    );
};

