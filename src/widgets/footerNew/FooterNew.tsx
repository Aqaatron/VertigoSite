import globals from '../../globals.module.scss'
import fpad from '../../../public/footerPad.png'
import girl from '../../../public/girlFooter.png'
import Image from "next/image";
import compStyles from './footernew.module.scss'
import vertigo from '../../../public/vertigo.png'
import MapWidget from "@/widgets/mobile/footerM/MapWidget";
import React, {useEffect} from "react";
import phone from "@/widgets/smm/whatsApp.png";
import Link from "next/link";
import promoStyles from '../promo/promoCommon.module.scss'
import {Taplink} from "@/widgets/taplink/Taplink";

export const FooterNew = () => {

    return <div className={compStyles.footer}>
        <div className={promoStyles.title}>Контакты</div>
        <div className={compStyles.flipper}>
            <div className={compStyles.left}>
                <div className={compStyles.title}>Vertigo VR Саратов</div>
                <div className={compStyles.el}>Адрес: г. Саратов, проспект имени Петра  <p/>Столыпина 27 ТК Манеж, 3 этаж
                </div>
                <div className={compStyles.el}>Телефон:</div>
                <div className={compStyles.el}>E-mail:</div>
                <div className={compStyles.el}>Часы работы:</div>
                <div className={compStyles.el}>ПН - ПТ: 11:00 - 23:00</div>
                <div className={compStyles.el}>СБ - ВС: 10:00 - 23:00</div>
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=103489904717" className={compStyles.map}
                    frameBorder="0"></iframe>
        </div>
        <Taplink/>
        <div className={compStyles.el}>© 2025 Vertigo VR. Все права защищены.</div>
        <div className={compStyles.flipper} style={{justifyContent: 'center', alignItems: 'center'}}>
            <div className={compStyles.el}>ИП Сидорова Лилия Григорьевна</div>
            <div className={compStyles.el}>ОГРНИП 324784700063938</div>
            <div className={compStyles.el}>ИНН 643969513393</div>
        </div>
        <Image src={girl} alt={'girl'} className={compStyles.girl}/>
    </div>
}