import globals from '../../../globals.module.scss'
import compStyles from './burger.module.scss'
import React, {useEffect, useState} from "react";
import vertigo from "@/widgets/mobile/header/logo.png";
import Image from "next/image";
import Link from "next/link";
import tg from "@/widgets/smm/Tg.png";
import vk from "@/widgets/smm/VK.png";
import wa from "@/widgets/smm/whatsappp.png";
import insta from "@/widgets/smm/insta.png";
import {router} from "next/client";

export const BurgerMenu = ({smmToggle}: { smmToggle: Function }) => {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = React.useState('main')
    React.useEffect(() => {

        if (open) {
            smmToggle(true)
            document.body.style.overflow = 'hidden';
        } else {
            smmToggle(false)
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);
    const anchorTo = (event: any) => {
        document.body.style.overflow = 'auto';
        const name = event.target.dataset.name
        const doc = document.getElementById(name)
        if (doc) {
            const yy = doc.offsetTop
            window.scrollTo({top: yy, behavior: 'smooth'})
        }
        setOpen(false)

    }
    const goTo = (event: any) => {
        const target = event.target.dataset.name
        //console.log(target)
        if (target === 'bday') {
            router.push('/birthday').then(r => {
            })
        } else {
            router.push('/').then(r => {
            })
        }
    }
    useEffect(() => {
        if (window.location.pathname === '/') {
            setMenu('main')
        } else if (window.location.pathname === '/birthday') {
            setMenu('birthday')
        }
    }, [])
    return (
        <div className={compStyles.burgerMenu}>
            <div onClick={() => setOpen(!open)}
                 className={compStyles.burger}>
        <span
            className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
            }`}
        />
                <span
                    className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${
                        open ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                        open ? "-rotate-45 -translate-y-[10px]" : ""
                    }`}
                />
            </div>
            {/* Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                    open ? "opacity-100" : "opacity-0"
                }`}
            />
            {/* Side Menu */}
            <div className={open ? compStyles.overLopened : compStyles.overLclosed}>
                <Image className={compStyles.logoImg} src={vertigo} alt={'logo'}/>
                {/*<Image className={compStyles.light} src={light} alt={'logo'}/>*/}
                <div onClick={goTo} data-name={'main'} className={compStyles.ancorItem}
                     style={{marginTop: '100px', zIndex: '1200'}}>Главная
                </div>
                < div onClick={goTo} data-name={'bday'} className={compStyles.ancorItem}
                >День рождения
                </div>
                {menu === 'main' &&
                    <div onClick={anchorTo} data-name={'events'} className={compStyles.ancorItem}>Мероприятия
                    </div>}
                {menu === 'main' &&
                    <div onClick={anchorTo} data-name={'gallery'} className={compStyles.ancorItem}>Галерея</div> ||
                    <div onClick={anchorTo} data-name={'reviews'} className={compStyles.ancorItem}>Отзывы</div>}
                {menu === 'main' &&
                    <div onClick={anchorTo} data-name={'games'} className={compStyles.ancorItem}>Игры</div> ||
                    <div onClick={anchorTo} data-name={'tarifs'} className={compStyles.ancorItem}>Тарифы</div>}
                <div onClick={anchorTo} data-name={'faq'} className={compStyles.ancorItem}>FaQ</div>
                {menu === 'main' &&
                    <div onClick={anchorTo} data-name={'sert'} className={compStyles.ancorItem}>Сертификаты</div>}
                <div onClick={anchorTo} data-name={'contacts'} className={compStyles.ancorItem}>Контакты</div>
                <Link href={'tel:7 902 710 02 10'} style={{textDecoration: 'none'}}>
                    <div className={compStyles.phone}> 8 902 710 02 10</div>
                </Link>
                <div className={globals.flexContRow} style={{margin: '40px 0 0 20px', alignItems: 'center'}}>
                    <Link href={'https://t.me/vertigovr'}>
                        <Image src={tg} alt={'smm'} className={compStyles.el}/>
                    </Link>
                    <Link href={'https://vk.com/vertigo_saratov'}>
                        <Image src={vk} alt={'smm'} className={compStyles.el}/>
                    </Link>
                    <Link href={'https://wa.me/79027100210'}>
                        <Image src={wa} alt={'smm'} className={compStyles.el}/>
                    </Link>
                    <Link href={'https://www.instagram.com/vertigo_saratov?igsh=MXhzZnJybGFmdjc1Zg=='}>
                        <Image src={insta} alt={'smm'} className={compStyles.insta}/>
                    </Link>
                </div>
            </div>
        </div>
    )
        ;
};

