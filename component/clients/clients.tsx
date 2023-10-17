import React from 'react';
import GalaInvest from '@/assest/icon/galeInvest'
import Nodral from '@/assest/icon/nodral'
import times from '@/assest/icon/tines.png'
import Image from "next/image";


export const Clients = () => {
    return (
        <section>
            <div>
                <p>100+</p>
                <p>have been serviced
                    by our company</p>
            </div>
            <GalaInvest/>
            <Image src={times} alt={''}/>
            <Nodral/>
        </section>
    );
};
