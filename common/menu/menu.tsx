'use client'
import {useState} from 'react';
import Global from "@/assest/icon/global";
import s from './menu.module.scss'

export const Menu = () => {
    const [local, setLocal] = useState<string>('en');
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const onLocalHandler = (newLocal:string) => {
        setLocal(newLocal)
        setIsOpen(!isOpen)
    }

    return (
        <div className={s.container}>
            <button  onClick={toggleDropdown}  className={s.button}>
                <Global className={s.icon}/>
            </button>
            {isOpen && (
                <ul  className={s.list}>
                    <li onClick={()=>onLocalHandler('en')}>EN</li>
                    <li onClick={()=>onLocalHandler('de')}>DE</li>
                    <li onClick={()=>onLocalHandler('pl')}>PL</li>
                </ul>
            )}
        </div>
    );
};