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
    return <div id={'form'} className={classNames(globals.contentBlock, compStyles.baggyMargin)} style={{"backgroundColor": "#14191C"}}>
        {!isMobile && <Image src={circle} alt={'pad'} className={compStyles.pad}/>}
        <PopUpFormDes/>
    </div>
}