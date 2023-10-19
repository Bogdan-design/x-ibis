import Around from '@/assest/icon/360-degrees'
import Bubble from '@/assest/icon/bubble'
import ShieldTick from '@/assest/icon/sheld-tick'
import Modules from '@/assest/icon/modules'
import Rocket from '@/assest/icon/rocket'
import {createElement} from "react";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Services",
        hash: "#services",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const

export const whatWeDoData = [
    {
        title: 'IT Audit',
        description: 'We enable businesses to fully grasp and enhance their information systems.',
        icon: createElement(Bubble) ,
        link:'/'
    },
    {
        title: 'Security',
        description: 'Focused on safeguarding your business, we offer complex cyber security solutions.',
        icon: createElement(ShieldTick) ,
        link:'/'
    },
    {
        title: 'Page Reliability infra',
        description: 'Our specialty lies in creating a dependable IT framework for efficient operations.',
        icon:createElement(Modules) ,
        link:'/'
    },
    {
        title: 'IT Administration',
        description: 'Our professional IT administration keeps your tech running smoothly.',
        icon: createElement(Rocket) ,
        link:'/'
    },
    {
        title: 'Modern Solutions',
        description: 'Specializing in next-level business solutions, we optimize efficiency.',
        icon: createElement(Around) ,
        link:'/'
    },
] as const