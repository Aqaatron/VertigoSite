import compStyles from './taplink.module.scss'
import Link from "next/link";
import Image from "next/image";
import phone from "@/widgets/smm/phone.png";
import tg from "@/widgets/smm/Tg.png";
import wa from "@/widgets/smm/whatsappp.png";
import React from "react";
import vk from "./VK.png"
import insta from "@/widgets/smm/insta.png";
import max from "@/widgets/smm/max.png";

export const Taplink = () => {

    return <div className={compStyles.taplink}>
        {/*<Link href={'tel:7 902 710 02 10'}>*/}
        {/*    <Image src={phone} alt={'smm'} className={compStyles.elphone}/>*/}
        {/*</Link>*/}
        <Link href={'https://max.ru/u/f9LHodD0cOI0u99Zom2SJFwaHhy8GE52nzqfKjoRm6GyaI3vZlxYx_HJwmc'}>
            <Image src={max} alt={'smm'} className={compStyles.el}/>
        </Link>
        <Link href={'https://t.me/vertigovr'}>
            <Image src={tg} alt={'smm'} className={compStyles.el}/>
        </Link>
        <Link href={'https://vk.com/vertigo_saratov'}>
            <Image src={vk} alt={'smm'} className={compStyles.el}/>
        </Link>
        <Link href={'https://wa.me/79027100210'}>
            <Image src={wa} alt={'smm'} className={compStyles.el}/>
        </Link>
    </div>
}