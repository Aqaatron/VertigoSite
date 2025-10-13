import globals from '../../../globals.module.scss'
import fpad from '../../../../public/footerPad.png'
import girl from '../../../../public/girlFooter.png'
import Image from "next/image";
import compStyles from './footer.module.scss'
import vertigo from '../../../../public/vertigo.png'
import MapWidget from "@/widgets/mobile/footerM/MapWidget";
import React, {useEffect} from "react";
import phone from "@/widgets/smm/whatsApp.png";
import Link from "next/link";

export const Footer = () => {

    return <div id={'contacts'} className={globals.contentBlock}>
        {/*<Image className={compStyles.pad} src={fpad} alt={'fpad'}/>*/}
        <div className={compStyles.contAll}>
            <Image className={compStyles.girl} src={girl} alt={'girl'}/>
            <div className={compStyles.contText}>
                <div className={compStyles.conyColumn}>
                    <Image src={vertigo} alt={'logo'} style={{
                        margin: '0 0 10px 0', width: '260px',
                        height: '30px'
                    }}/>
                    <div className={compStyles.el}>ИП Сидорова Лилия Григорьевна</div>
                    <div className={compStyles.el}>г. Саратов, проспект имени Петра Столыпина 27 <p/>ТК Манеж, 3 этаж
                    </div>
                    <div className={compStyles.el}>ОГРНИП 324784700063938</div>
                    <div className={compStyles.el}>ИНН 643969513393</div>
                </div>
                <div className={compStyles.conyColumn}>
                    <h2 style={{margin: '0'}}>Наши направления</h2>
                    <div className={compStyles.el}>Дни рождения</div>
                    <div className={compStyles.el}>Корпоративы</div>
                    <div className={compStyles.el}>Аренда</div>
                </div>
                <div className={compStyles.conyColumn}>
                    <h1 style={{margin: '0', width: '450px'}} className={compStyles.spaceF}>ОТкРОЙ НОВЫЙ МИР ВИРТУАЛЬНЫх
                        ПРИкЛЮЧЕНИЙ</h1>
                    <Link href={'tel:7 902 710 02 10'} style={{
                        marginLeft: '50px',
                        marginTop: '20px',
                        textDecoration: 'none',
                        fontSize: '50px',
                        color: 'white'
                    }}>
                        8 902 710 02 10
                    </Link>
                    <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=103489904717" width="560" height="400"
                            frameBorder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
}