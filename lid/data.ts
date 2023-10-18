import React from "react";
import bubble from '@/assest/icon/bubble.svg'
import shieldTick from '@/assest/icon/shield-tick.svg'
import modules from '@/assest/icon/modules.svg'
import rocket from '@/assest/icon/rocket.svg'
import around from '@/assest/icon/360-degrees.svg'


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
        icon: bubble,
        link:'/'
    },
    {
        title: 'Security',
        description: 'Focused on safeguarding your business, we offer complex cyber security solutions.',
        icon: shieldTick,
        link:'/'
    },
    {
        title: 'Ensuring Reliability infra',
        description: 'Our specialty lies in creating a dependable IT framework for efficient operations.',
        icon: modules,
        link:'/'
    },
    {
        title: 'IT Administration',
        description: 'Our professional IT administration keeps your tech running smoothly.',
        icon: rocket,
        link:'/'
    },
    {
        title: 'Modern Solutions',
        description: 'Specializing in next-level business solutions, we optimize efficiency.',
        icon: around,
        link:'/'
    },
] as const