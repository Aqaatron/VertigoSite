import globals from '../../../globals.module.scss'
import fpad from '../../../../public/footerPad.png'
import girl from '../../../../public/girlFooter.png'
import Image from "next/image";
import compStyles from './footerM.module.scss'
import vertigo from '../../../../public/vertigo.png'
import React from "react";

export const FooterM = () => {

    return <div id={'contacts'} className={globals.contentBlock} style={{backgroundColor: '#43515B'}}>
        {/*<Image className={compStyles.pad} src={fpad} alt={'fpad'}/>*/}
        <div className={compStyles.contAll}>
            <div className={compStyles.contText}>
                <div className={compStyles.conyColumn}>
                    <Image src={vertigo} alt={'logo'} style={{margin: '10px 0 0 0', width: '175px', height: '19px'}}/>
                    <h1 style={{margin: '30px 0 0 0 '}}>Информация</h1>
                    <div className={compStyles.el}>ИП Сидорова Лилия Григорьевна</div>
                    <div className={compStyles.el}>ОГРНИП 324784700063938</div>
                    <div className={compStyles.el}>ИНН 643969513393</div>
                    <div className={compStyles.el}>г. Саратов, проспект имени <p/>Петра Столыпина 27 <p/>ТК Манеж, 3
                        этаж
                    </div>
                </div>
            </div>
            <div className={compStyles.conyColumn}>
                <h1 style={{margin: '0 '}}>Наши направления</h1>
                <div className={compStyles.el}>Дни рождения</div>
                <div className={compStyles.el}>Корпоративы</div>
                <div className={compStyles.el}>Аренда</div>
            </div>
{/*            <div*/}
{/*                id="mapContainer"*/}
{/*                style={{*/}
{/*                    width: "100%",*/}
{/*                    height: "fit-content",*/}
{/*                    border: "1px solid #a3a3a3",*/}
{/*                    marginLeft: "20px",*/}
{/*                    marginBottom: '40px',*/}
{/*                    zIndex: '2'*/}
{/*                }}*/}
{/*            >*/}
{/*                <iframe*/}
{/*                    title="2GIS Map"*/}
{/*                    srcDoc={`*/}
{/*      <html>*/}
{/*        <head>*/}
{/*          <script src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>*/}
{/*        </head>*/}
{/*        <body style="margin:0; padding:0;">*/}
{/*<!--          <div id="map" style="width:100%; height:100%;"></div>-->*/}
{/*          <script>*/}
{/*            new DGWidgetLoader({*/}
{/*              container: "map",*/}
{/*              width: "100%",*/}
{/*              height: "300px",*/}
{/*              borderColor: "#a3a3a3",*/}
{/*              pos: { lat: 51.531367, lon: 46.02742, zoom: 16 },*/}
{/*              opt: { city: "saratov" },*/}
{/*              org: [{ id: "70000001103326442" }]*/}
{/*            });*/}
{/*          </script>*/}
{/*        </body>*/}
{/*      </html>*/}
{/*    `}*/}
{/*                    width="100%"*/}
{/*                    height="300px"*/}
{/*                    style={{border: "none"}}*/}
{/*                />*/}
{/*            </div>*/}
            <Image className={compStyles.girl} src={girl} alt={'girl'}/>
        </div>
    </div>
}