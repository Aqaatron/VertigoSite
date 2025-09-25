import globals from '../globals.module.scss'
import {StartView} from "@/widgets/start/StartView";
import {Events} from "@/widgets/events/Events";
import {Gallery} from "@/widgets/gallery/Gallery";
import {Slider} from "@/widgets/slider/Slider";
import {Faq} from "@/widgets/faq/Faq";
import {Sertificate} from "@/widgets/sertificate/Sertificate";
import '../index.css';
import {Footer} from "@/widgets/footer/Footer";
import {MyForm} from "@/widgets/form/MyForm";
import React, {useEffect} from "react";
import {Header} from "@/widgets/mobile/header/Header";
import {EventsM} from "@/widgets/mobile/eventsM/EventsM";
import {FaqM} from "@/widgets/mobile/faqM/FaqM";
import {MyFormM} from "@/widgets/mobile/formM/MyFormM";
import {FooterM} from "@/widgets/mobile/footerM/FooterM";
import {SliderM} from "@/widgets/mobile/sliderM/SliderM";
import {PopUpGlobal} from "@/widgets/popup/PopupGLobal";
import {SertificateM} from "@/widgets/mobile/sertificateM/SertificateM";
import {Smm} from "@/widgets/smm/Smm";
import {BurgerMenu} from "@/widgets/mobile/Burger/BurgerMenu";
import type {Metadata} from 'next'
import AmoForm from "@/widgets/AmoForm";

export const metadata: Metadata = {
    title: 'VERTIGO VR',
    description: 'Лучший парк виртуальной реальности в Саратове!',
}
export default function Page() {
    const [isMobile, setIsMobile] = React.useState(false)
    const [show, setShow] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
        //window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true)
    }, []);

    const closeMe = () => {
        setShow(false)
    }
    const showP = () => {
        setShow(true)
    }
    return <div className={globals.page}>
        {show && <PopUpGlobal closeMe={closeMe}/>}
        {(!show) && <Smm/>}
        {(isMobile && !show) && <BurgerMenu/>}
        {!isMobile && <StartView showP={showP}/> || <Header showP={showP}/>}
        {!isMobile && <Events showP={showP}/> || <EventsM showP={showP}/>}
        {!isMobile && <Gallery/>}
        {!isMobile && <Slider/> || <SliderM/>}
        {!isMobile && <Faq showP={showP}/> || <FaqM showP={showP}/>}
        {!isMobile && <Sertificate showP={showP}/> || <SertificateM showP={showP}/>}
        {/*{!isMobile && <MyForm/> || <MyFormM/>}*/}
        {!isMobile && <Footer/> || <FooterM/>}
    </div>
}