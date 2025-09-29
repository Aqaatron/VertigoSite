import globals from '../../globals.module.scss'
import compStyles from './smm.module.scss'
import Image from "next/image";
import upp from './hover.png'
import phone from './phone.png'
import Link from "next/link";
import React, {useEffect} from "react";
import tg from "@/widgets/smm/Tg.png";
import wa from "@/widgets/smm/whatsappp.png";

export const Smm = () => {
    const [up, setUp] = React.useState(true)
    const scrollUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setUp(false)
            } else {
                setUp(true)
            }
            //console.log("Window scrollY:", window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        // cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return <div className={compStyles.cont}>
        {!up && <Image onClick={scrollUp} src={upp} alt={'smm'} className={compStyles.up}/>}
        <Link href={'tel:7 902 710 02 10'}>
            <Image src={phone} alt={'smm'} className={compStyles.elphone}/>
        </Link>
        <Link href={'https://t.me/vertigovr'}>
            <Image src={tg} alt={'smm'} className={compStyles.el}/>
        </Link>
        {/*<Link href={'https://vk.com/vertigo_saratov'}>*/}
        {/*    <Image src={vk} alt={'smm'} className={compStyles.el}/>*/}
        {/*</Link>*/}
        <Link href={'https://wa.me/79027100210'}>
            <Image src={wa} alt={'smm'} className={compStyles.el}/>
        </Link>

    </div>
}