import globals from '../../../globals.module.scss'
import compStyles from './formDes.module.scss'
import Image from "next/image";
import circle from '../../../../public/circleTransparent.png'
import {PopUpFormDes} from "@/widgets/promo/formDes/popUpFormDes";
import React, {useEffect} from "react";
import classNames from "classnames";
import Link from "next/link";

export const MyFormDes = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
        //window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true)
    }, []);
    return <div id={'form'} className={classNames(globals.contentBlock, compStyles.baggyMargin)}>
        {!isMobile && <Image src={circle} alt={'pad'} className={compStyles.pad}/>}
        <PopUpFormDes/>
        <h3 className={compStyles.aftbtn}>Предпочитаете общаться
            голосом? <Link href={'tel:7 902 710 02 10'} ><span
                style={{textDecoration: 'underline', color:'white'}}>Позвоните нам по номеру 8 902 710 02 10!</span></Link></h3>
    </div>
}