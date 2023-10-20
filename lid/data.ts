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
        icon: createElement(Bubble),
        link: '/about'
    },
    {
        title: 'Security',
        description: 'Focused on safeguarding your business, we offer complex cyber security solutions.',
        icon: createElement(ShieldTick),
        link: '/'
    },
    {
        title: 'Page Reliability infra',
        description: 'Our specialty lies in creating a dependable IT framework for efficient operations.',
        icon: createElement(Modules),
        link: '/'
    },
    {
        title: 'IT Administration',
        description: 'Our professional IT administration keeps your tech running smoothly.',
        icon: createElement(Rocket),
        link: '/'
    },
    {
        title: 'Modern Solutions',
        description: 'Specializing in next-level business solutions, we optimize efficiency.',
        icon: createElement(Around),
        link: '/'
    },
] as const

export const pagesData = [
    {
        pageTitle: 'IT Audit',
        pageDescription: 'We enable businesses to fully grasp and enhance their information systems.',
        options:
            [
                {
                    title: 'Infrastructure Analysis',
                    description: 'Assess the current state of the IT infrastructure, including hardware, software, network topology, and cloud resources.'
                },
                {
                    title: 'Security and Vulnerabilities',
                    description: 'Conduct a vulnerability scan, as well as an analysis of security systems including authentication, authorization, encryption, and data protection.'
                },
                {
                    title: 'Regulatory Compliance',
                    description: 'Ensure that the company is compliant with relevant industry regulations and data security standards (e.g. GDPR, HIPAA) depending on the business area.'
                },
                {
                    title: 'Backup and Recovery',
                    description: 'Evaluate data backup strategies and recovery plans to ensure systems can be recovered in the event of failures.'
                },
                {
                    title: 'Network Infrastructure',
                    description: 'Analyze network architecture, performance, segmentation, traffic management and security.'
                },
                {
                    title: 'Processes and Performance',
                    description: 'Examine business processes and their alignment with IT systems, identify bottlenecks and suggest improvements to optimize performance.'
                },
                {
                    title: 'Resource Management',
                    description: 'Analyze the use of IT resources such as servers, data storage, software licenses to optimize costs.'
                },

            ]
    },
    {
        pageTitle: 'Security',
        pageDescription: 'We offer comprehensive solutions to detect, prevent and respond to cyber threats. ',
        options:
            [
                {
                    title: 'Infrastructure Analysis',
                    description: 'Assess the current state of the IT infrastructure, including hardware, software, network topology, and cloud resources.'
                }

            ]
    },

] as const