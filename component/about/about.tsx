import React from 'react';
import {Button} from "@/component/ui/button";
import s from './about.module.scss'

export const About = () => {
    return (
        <section className={s.about}>
            <h2 className={s.title}>
                We specialize in
                IT infrastructure and security.
            </h2>
            <div className={s.description}>
                <h4>
                    Our mission to develop and uphold cutting-edge tech solutions, ensuring reliability, efficiency, and
                    protection.
                </h4>
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

                <Button>Get in Touch</Button>
            </div>
        </section>
    );
};

