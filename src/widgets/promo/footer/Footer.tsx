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

{/*                    <div*/}
{/*                        id="mapContainer"*/}
{/*                        style={{width: "500px", height: "400px", border: "1px solid #a3a3a3", marginLeft: "50px"}}*/}
{/*                    >*/}
{/*                        <iframe*/}
{/*                            title="2GIS Map"*/}
{/*                            srcDoc={`*/}
{/*      <html>*/}
{/*        <head>*/}
{/*          <script src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>*/}
{/*        </head>*/}
{/*        <body style="margin:0; padding:0;">*/}
{/*<!--          <div id="map" style="width:100%; height:100%;"></div>-->*/}
{/*          <script>*/}
{/*            new DGWidgetLoader({*/}
{/*              container: "map",*/}
{/*              width: "500px",*/}
{/*              height: "400px",*/}
{/*              borderColor: "#a3a3a3",*/}
{/*              pos: { lat: 51.531367, lon: 46.02742, zoom: 16 },*/}
{/*              opt: { city: "saratov" },*/}
{/*              org: [{ id: "70000001103326442" }]*/}
{/*            });*/}
{/*          </script>*/}
{/*        </body>*/}
{/*      </html>*/}
{/*    `}*/}
{/*                            width="500px"*/}
{/*                            height="400px"*/}
{/*                            style={{border: "none"}}*/}
{/*                        />*/}
{/*                    </div>*/}
                </div>
            </div>
        </div>
    </div>
}