'use client'
import React from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import Global from "@/assest/icon/global";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import s from './header.module.scss'

export const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Logo style={{width: '90px', height: '18px'}}/>
                <div className={s.options}>
                    <nav>
                        <ul className={s.links}>
                            {links.map(l => (
                                <Link className={s.link} key={l.hash} href={l.hash}>
                                    {l.name}
                                </Link>)
                            )}
                        </ul>
                    </nav>
                    <div>
                        <IconButton
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Global/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem sx={{margin:'0'}} onClick={handleClose}>EN</MenuItem>
                            <MenuItem onClick={handleClose}>PL</MenuItem>
                            <MenuItem onClick={handleClose}>DE</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
};

