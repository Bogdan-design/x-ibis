import React from 'react';
import {whatWeDoData} from "@/lid/data";
import {Card} from "@/component/card/card";
import Image from "next/image";

export const Services = () => {
    return (
        <section>
            <h2>What we do</h2>
            <div>
                {whatWeDoData.map((s,i) =>(
                    <Card key={i}>
                        <Image src={s.icon} alt={''}/>
                    </Card>
                ))}
            </div>

        </section>
    );
};

