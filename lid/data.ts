import React from "react";
import {Bubble} from '@/assest/icon/bubble'
import {ReactComponent as SheldTick} from '@/assest/icon/sheld-tick'
import {ReactComponent as Modules} from '@/assest/icon/modules'
import {ReactComponent as Rocket} from '@/assest/icon/rocket'
import {ReactComponent as Around} from '@/assest/icon/360-degrees'


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
        icon: React.createElement(Bubble)
    },
    {
        title: 'Security',
        description: 'Focused on safeguarding your business, we offer complex cyber security solutions.',
        icon: React.createElement(SheldTick)
    },
    {
        title: 'Ensuring Reliability infra',
        description: 'Our specialty lies in creating a dependable IT framework for efficient operations.',
        icon: React.createElement(Modules)
    },
    {
        title: 'IT Administration',
        description: 'Our professional IT administration keeps your tech running smoothly.',
        icon: React.createElement(Rocket)
    },
    {
        title: 'Modern Solutions',
        description: 'Specializing in next-level business solutions, we optimize efficiency.',
        icon: React.createElement(Around)
    },
] as const