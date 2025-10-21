import {StartViewPromo} from "@/widgets/promo/startPromo/StartViewPromo";
import {Footer} from "@/widgets/promo/footer/Footer";
import {Merits} from "@/widgets/promo/Merits/Merits";
import {Flow} from "@/widgets/promo/Flow/Flow";
import {People} from "@/widgets/promo/people/People";
import {Safety} from "@/widgets/promo/safety/Safety";
import {Special} from "@/widgets/promo/special/Special";
import {Reviews} from "@/widgets/promo/reviews/Reviews";
import {Faq} from "@/widgets/faq/Faq";
import {Adults} from "@/widgets/promo/adults/Adults";
import {Packages} from "@/widgets/promo/packages/Packages";
import React, {useEffect} from "react";
import {PromoForm} from "@/widgets/promo/form/PromoForm";
import {BookBtn} from "@/widgets/BookBtn/BookBtn";
import {SmmPromo} from "@/widgets/promo/smmPromo/SmmPromo";
import {BurgerMenu} from "@/widgets/mobile/Burger/BurgerMenu";
import {FooterNew} from "@/widgets/footerNew/FooterNew";
import Form from "next/form";
import {MyForm} from "@/widgets/form/MyForm";
import {MyFormDes} from "@/widgets/promo/formDes/MyFormDes";
import {MyFormM} from "@/widgets/mobile/formM/MyFormM";
import {FaqMtwo} from "@/widgets/promo/faqMtwo/FaqMtwo";
import {texts} from "@/texts";
import {SingleGallery} from "@/widgets/promo/SingleGallery/SingleGallery";
import {Gallery} from "@/widgets/promo/SingleGallery/Gallery";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

export const pack = React.createContext('start')
export default function Birthday() {
    const [packagge, setPackagge] = React.useState('start')
    const [isMobile, setIsMobile] = React.useState(false)
    const [show, setShow] = React.useState(false)
    const [hideSmm, setHidesmm] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
        //window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true)
    }, []);
    const [i, setI] = React.useState(1)
    const closeMe = () => {
        setShow(false)
    }
    const showP = () => {
        setShow(true)
    }
    const handlePackagge = (event: any) => {
        setPackagge(event.target.dataset.name)
        //console.log(event.target.dataset.name)
    }
    const handleSmm = (val: any) => {
        setHidesmm(val)
    }
    const showGal = useSelector((state: RootState) => state.counter.showGal)
    return <div>
        <pack.Provider value={packagge}>
            {!hideSmm && <SmmPromo/>}
            <BookBtn/>
            {showGal && <SingleGallery/>}
            {(isMobile && !show) && <BurgerMenu smmToggle={handleSmm}/>}
            <StartViewPromo/>
            <Merits/>
            <Flow/>
            <People/>
            <Safety/>
            <Reviews/>
            {/* <Special/> */}
            <Packages action={handlePackagge}/>
            <Adults/>
            {/*<Gallery/>*/}
            {isMobile && <FaqMtwo/> || <Faq questions={texts.promo.faq} isPromo={true} showP={() => {
            }}/>}
            {/*<PromoForm/>*/}
            <MyFormDes/>
            <FooterNew/>
        </pack.Provider>
    </div>
}