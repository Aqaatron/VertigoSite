import {StartViewPromo} from "@/widgets/promo/startPromo/StartViewPromo";
import {Footer} from "@/widgets/promo/footer/Footer";
import {Merits} from "@/widgets/promo/Merits/Merits";
import {Flow} from "@/widgets/promo/Flow/Flow";
import {People} from "@/widgets/promo/people/People";
import {Safety} from "@/widgets/promo/safety/Safety";
import {Special} from "@/widgets/promo/special/Special";
import {Reviews} from "@/widgets/promo/reviews/Reviews";
import {Faq} from "@/widgets/promo/faq/Faq";
import {Adults} from "@/widgets/promo/adults/Adults";
import {Packages} from "@/widgets/promo/packages/Packages";
import React, {useContext} from "react";
import {PromoForm} from "@/widgets/promo/form/PromoForm";

export const pack = React.createContext('start')
export default function Promo() {
    const [packagge, setPackagge] = React.useState('start')

    const handlePackagge = (event: any) => {
        setPackagge(event.target.dataset.name)
    }
    console.log(packagge)
    return <div>
        <StartViewPromo/>
        <Merits/>
        <Flow/>
        <People/>
        <Safety/>
        <Reviews/>
        <Special/>
        <Packages action={handlePackagge}/>
        <Adults/>
        <Faq/>
        <pack.Provider value={packagge}>
            <PromoForm/>
        </pack.Provider>
        <Footer/>
    </div>
}